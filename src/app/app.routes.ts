import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { FacturasComponent } from './components/facturas/facturas.component';

const APP_ROUTES:Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'facturas',
    component: FacturasComponent
  },


  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);