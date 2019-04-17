import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';                 //api

// Rutas
import { APP_ROUTING } from './app.routes';

import {FormsModule} from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { LeftPanelComponent } from './layout/left-panel/left-panel.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LeftPanelComponent,
    AboutComponent
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
