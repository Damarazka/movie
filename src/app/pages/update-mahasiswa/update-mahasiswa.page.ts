import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MahasiswaModel } from '../mahasiswa.model';

@Component({
  selector: 'app-update-mahasiswa',
  templateUrl: './update-mahasiswa.page.html',
  styleUrls: ['./update-mahasiswa.page.scss'],
})
export class UpdateMahasiswaPage implements OnInit {
  mahasiswa: MahasiswaModel = {
    nama: '',
    alamat: '',
    nim: '',
    email: ''
  }
  
  constructor( private router: Router, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe((response: any) => {
      console.log(response)
      const payload = JSON.parse(response.payload)
      this.mahasiswa = {...payload}
      console.log(payload)
    })
  }


  async updateMahasiswa() {
/*     try {
      await this.mahasiswaService.updateMahasiswa(this.mahasiswa).toPromise()
      const payload = JSON.stringify(this.mahasiswa)
      this.navCtrl.navigateBack('/mahasiswa', {queryParams: {payload}})
    } catch (error) {
      console.log('error bang', this.mahasiswa)
    } */
  }

  back(){
    this.router.navigateByUrl('/mahasiswa')
  }
}
