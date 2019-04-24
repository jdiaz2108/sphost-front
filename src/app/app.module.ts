import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// Rutas
import { APP_ROUTING } from './app.routes';

import {FormsModule} from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { LeftPanelComponent } from './components/layout/left-panel/left-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FacturasComponent } from './components/facturas/facturas.component';
import { ListarFacturasComponent } from './components/facturas/listar-facturas/listar-facturas.component';
import { ListarClienteComponent } from './components/clientes/listar-cliente/listar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LeftPanelComponent,
    FacturasComponent,
    ListarFacturasComponent,
    ListarClienteComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
