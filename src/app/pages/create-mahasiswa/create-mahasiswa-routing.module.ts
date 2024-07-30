import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMahasiswaPage } from './create-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMahasiswaPageRoutingModule {}
