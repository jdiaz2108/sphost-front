import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                 //api

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LeftPanelComponent,
    FacturasComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
