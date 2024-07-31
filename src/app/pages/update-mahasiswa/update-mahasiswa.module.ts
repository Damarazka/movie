import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMahasiswaPageRoutingModule } from './update-mahasiswa-routing.module';

import { UpdateMahasiswaPage } from './update-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMahasiswaPageRoutingModule
  ],
  declarations: [UpdateMahasiswaPage]
})
export class UpdateMahasiswaPageModule {}
