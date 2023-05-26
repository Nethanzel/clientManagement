import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddressAdUpComponent } from './address-ad-up/address-ad-up.component';
import { ClientAdUpComponent } from './client-ad-up/client-ad-up.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    ClientDetailComponent,
    AddressAdUpComponent,
    ClientAdUpComponent,
    AddressFormComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
