import { Component } from '@angular/core';
import { FetchModuleService } from "../fetch-module.service";

@Component({
  selector: 'list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})

export class ListClientsComponent {
  isLoading:boolean = true;
  Clients:any;
  constructor(private appFetch:FetchModuleService) {}
  err:boolean = false;

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.appFetch.getClients().subscribe(res => {
      this.Clients = res;
      this.isLoading = false;
    }, () => {
      this.err = true;
      this.isLoading = false;
    })
  }

  deleteClient(id:Number) {
    this.appFetch.deleteClient(id).subscribe(res => {
      if(!res) {
        this.getClients();
      }
    })
  }

}