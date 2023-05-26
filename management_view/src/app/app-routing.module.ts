import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListClientsComponent } from "./list-clients/list-clients.component"
import { ClientDetailComponent } from "./client-detail/client-detail.component"
import { AddressAdUpComponent } from "./address-ad-up/address-ad-up.component";
import { ClientAdUpComponent } from "./client-ad-up/client-ad-up.component";

const routes: Routes = [
  {
    path: "",
    component: ListClientsComponent
  },
  {
    path: "client/:id",
    component: ClientDetailComponent
  },
  {
    path: "address/:task/:id",
    component: AddressAdUpComponent
  },
  {
    path: "client/:task/:id",
    component: ClientAdUpComponent
  },
  {
    path: "client/add/:id",
    component: ClientAdUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
