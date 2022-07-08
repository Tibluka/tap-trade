import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

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
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT'
    }
  ],
})
export class PagesModule { }
