import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  mahasiswas : any[] = []

  constructor(private mahasiswaService: MahasiswaService, private router: Router, private alrtCntrl: AlertController, private navCtrl: NavController) { }

  ionViewWillEnter(){
    this.loadMahasiswa()
  }

  ngOnInit() {
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
  
  moveToUpdateMahasiswa(data: any) {
    const payload = JSON.stringify(data)
    this.navCtrl.navigateForward('/update-mahasiswa', {
      queryParams: { payload }
    });
  }

  async deleteMahasiswa(_id: any){
    const alert = await this.alrtCntrl.create({
      header: 'Konfirmasi',
      message: 'Data ini beneran mau dihapus bre?',
      buttons: [{
        text: 'batal',
        role: 'cencel',
        handler: () => {
          console.log('penghapusan data dibatalkan')
        }
      },
      {
        text: 'hapus',
        handler: () => {
          this.mahasiswaService.deleteMahasiswa(_id).subscribe(() => {
            console.log('data berhasil dihapus')
            location.reload()
          })
        }
      }]
    })

    await alert.present()
  }
  
  backToHome(){
    this.router.navigateByUrl('/tabs/tab1')
  }
}
