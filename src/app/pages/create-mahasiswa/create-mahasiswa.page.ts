import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-mahasiswa',
  templateUrl: './create-mahasiswa.page.html',
  styleUrls: ['./create-mahasiswa.page.scss'],
})
export class CreateMahasiswaPage implements OnInit {
  mahasiswa = {
    nama: '',
    alamat: '',
    nim: '',
    email: ''
  }

  constructor(private router: Router, private mahasiswaService: MahasiswaService) { }

  ngOnInit() {
  }

  createMahasiswa(){
    this.mahasiswaService.createMahasiswa(this.mahasiswa).subscribe(
      response => {
        console.log('Student created:', response);
        this.router.navigate(['/mahasiswa']);
      },
      error => {
        console.error('Error creating student:', error);
      }
    )
  }

  back(){
    this.router.navigateByUrl('/mahasiswa')
  }

}
