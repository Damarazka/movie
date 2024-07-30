import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  private apiUrl = 'http://93.127.199.17:8080/api/mahasiswa'
  mahasiswas : any[] = []
  constructor(private mahasiswaService: MahasiswaService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadMahasiswa()
  }

  loadMahasiswa() {
    this.mahasiswaService.getAllMahasiswas().subscribe(
      data => {
        if (Array.isArray(data)) {
          this.mahasiswas = data;
          console.log('Loaded mahasiswa data:', this.mahasiswas);
        } else {
          console.error('Expected an array but got:', data);
        }
      },
      error => {
        console.error('Error loading students:', error);
      }
    );
  }
  

  moveToCreateMahasiswa(){
    this.router.navigateByUrl('/create-mahasiswa')
  }

  deleteMahasiswa(_id: any) {
    confirm('data ini beneran mau kamu hapus bre')
    this.mahasiswaService.deleteMahasiswa(_id).subscribe(() => {
        console.log('data berhasil dihapus')
        location.reload()
      }
    )
  }
  
}
