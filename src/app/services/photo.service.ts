import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log(capturedPhoto)
  
    return capturedPhoto.webPath
  }

  async convertToBlob(path: string){
    const response = await fetch(path)
    if (!response.ok) {
      throw new Error('fetch error')
    }
    return response.blob()
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

