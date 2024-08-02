import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'bookmark',
    loadChildren: () => import('./pages/bookmark/bookmark.module').then( m => m.BookmarkPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/mahasiswa.module').then( m => m.MahasiswaPageModule)
  },
  {
    path: 'create-mahasiswa',
    loadChildren: () => import('./pages/create-mahasiswa/create-mahasiswa.module').then( m => m.CreateMahasiswaPageModule)
  },
  {
    path: 'update-mahasiswa',
    loadChildren: () => import('./pages/update-mahasiswa/update-mahasiswa.module').then( m => m.UpdateMahasiswaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
