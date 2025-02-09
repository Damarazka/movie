import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { UserModel } from '../user.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user: UserModel = {} as UserModel;

  // user: any = {
  //   name: 'Damarazka Akhyari',
  //   email: 'example123@mail.com',
  //   phone: '123-456-7890',
  //   instagram: 'ahoha_',
  //   address: '123 Main St, Anytown, USA',
  //   avatar: ''
  // };

  constructor(private router: Router, private http: HttpService) {
    this.user = this.http.getUserData();
  }

  async ngOnInit() {
    await this.loadAvatar();
  }

  goToBookmark() {
    this.router.navigateByUrl('/bookmark');
  }

  goToHistory() {
    this.router.navigateByUrl('/history');
  }

  goToCrud() {
    this.router.navigateByUrl('/mahasiswa')
  }

  async changeAvatar() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });

      if (image.dataUrl) {
        this.user.avatar = image.dataUrl;
        await Preferences.set({
          key: 'userAvatar',
          value: image.dataUrl
        });
      } else {
        console.error('Failed to capture image data URL.');
      }
    } catch (error) {
      console.error('Failed to capture image:', error);
    }
  }

  async loadAvatar() {
    const { value } = await Preferences.get({ key: 'userAvatar' });
    if (value) {
      this.user.avatar = value;
    }
  }

  goToMap() {
    this.router.navigateByUrl('/map')
  }
}
