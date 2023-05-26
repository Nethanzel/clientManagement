import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Address } from './Models/Address';
import { Client } from './Models/Client';

@Injectable({
  providedIn: 'root'
})

export class FetchModuleService {
  server:String = "http://localhost:5188/";
  constructor(private _http:HttpClient) { }

  getClients() {
    return this._http.get(`${this.server}api/Clients`);
  }

  getClient(id:Number) {
    return this._http.get(`${this.server}api/Clients/getOne?id=${id}`);
  }

  getAddress(id:Number) {
    return this._http.get(`${this.server}api/Address/getOne?id=${id}`);
  }

  deleteClient(id:Number) {
    return this._http.delete(`${this.server}api/Clients?id=${id}`);
  }

  deleteAddress(id:Number) {
    return this._http.delete(`${this.server}api/Address?addressId=${id}`);
  }

  addAddress(newAddress:Address) {
    return this._http.post(`${this.server}api/Clients/appendAddress`, newAddress);
  }

  addClient(newClient:Client) {
    return this._http.post(`${this.server}api/Clients/Create`, newClient);
  }

  updateAddress(newAddress:Address) {
    return this._http.put(`${this.server}api/Address`, newAddress);
  }

  updateClient(newClient:Client) {
    return this._http.put(`${this.server}api/Clients/Update`, newClient);
  }
}
