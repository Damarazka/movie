import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaModel } from '../mahasiswa.model';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-create-mahasiswa',
  templateUrl: './create-mahasiswa.page.html',
  styleUrls: ['./create-mahasiswa.page.scss'],
})
export class CreateMahasiswaPage implements OnInit {
  mahasiswa : MahasiswaModel = {} as MahasiswaModel
  selectedFile: any;

  constructor(private router: Router, private http: HttpService, public photoService: PhotoService) { }

  async ngOnInit() {
    
  }

  async takePicture(){
    try {
      const path = await this.photoService.addNewToGallery()
      console.log(path)
      if (path == null) {
        throw path
      }
      this.mahasiswa.photo = path
    } catch (error) {
    }
  }

  async createMahasiswa(){
    try {
      const formData = new FormData()
      const blob = await this.photoService.convertToBlob(this.mahasiswa.photo!)
      formData.append('nama', this.mahasiswa.nama)
      formData.append('alamat', this.mahasiswa.alamat)
      formData.append('email', this.mahasiswa.email)
      formData.append('nim', this.mahasiswa.nim)
      formData.append('photo', blob)
      const headers = this.http.getToken()
      const response = await this.http.post(`${environment.baseUrl}/mahasiswa`, formData, headers)
      console.log(response)

      if (response.status !== 200) {
        throw response
      }

    } catch (error) {
      console.error(error)
    }
    /* this.mahasiswaService.createMahasiswa(this.mahasiswa).subscribe(
      response => {
        console.log('Student created:', response);
        this.router.navigate(['/mahasiswa']);
      },
      error => {
        console.error('Error creating student:', error);
      }
    ) */
  }

  async addPhotoToGallery() {
    this.photoService.addNewToGallery()
  }

  back(){
    this.router.navigateByUrl('/mahasiswa')
  }

}
