import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMahasiswaPage } from './update-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMahasiswaPageRoutingModule {}
