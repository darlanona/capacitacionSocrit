import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente01Component } from './componente01/componente01.component';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Componente02Component } from './modulo01/componente02.component';
@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    Componente02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
