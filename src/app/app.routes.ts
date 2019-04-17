import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AboutComponent } from './about/about.component';

const APP_ROUTES:Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);