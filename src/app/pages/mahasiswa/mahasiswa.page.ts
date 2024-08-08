import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  mahasiswas: any[] = [];

  constructor(private router: Router, private alrtCntrl: AlertController, private navCtrl: NavController, private http: HttpService) { }

  ionViewWillEnter() {
    this.loadMahasiswa()
  }

  ngOnInit() {
  }

  async loadMahasiswa() {
    try {
      const headers = this.http.getToken();

      const response = await this.http.get(`${environment.baseUrl}/mahasiswa`, headers);

      if (response.status !== 200) {
        throw response;
      }

      this.mahasiswas = response.body.data;
    } catch (error) {
      console.error(error);
    }
  }


  moveToCreateMahasiswa() {
    this.router.navigateByUrl('/create-mahasiswa')
  }

  moveToUpdateMahasiswa(data: any) {
    const payload = JSON.stringify(data)
    this.navCtrl.navigateForward('/update-mahasiswa', {
      queryParams: { payload }
    });
  }

  async deleteMahasiswa(_id: any) {
/*     const alert = await this.alrtCntrl.create({
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

    await alert.present() */
  }

  backToHome() {
    this.router.navigateByUrl('/tabs/tab1')
  }
}
