import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { FacturasComponent } from './components/facturas/facturas.component';
import { ListarFacturasComponent } from './components/facturas/listar-facturas/listar-facturas.component';

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
    path: 'facturas/:id',
    component: ListarFacturasComponent
  },


  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
]


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);