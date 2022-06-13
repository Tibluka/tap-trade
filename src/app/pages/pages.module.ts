import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home', component: PagesComponent, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'login', component: PagesComponent, loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
    ])
  ]
})
export class PagesModule { }
