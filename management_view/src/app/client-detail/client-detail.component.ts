import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchModuleService } from "../fetch-module.service";

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})

export class ClientDetailComponent {
  constructor(private route:ActivatedRoute, private appFetch:FetchModuleService) {}

  Client:any;
  isLoading:boolean = true;
  clientId:Number = Number(this.route.snapshot.paramMap.get('id'));
  err:boolean = false;

  ngOnInit() {
    this.getClient(this.clientId);
  }

  getClient(id:Number) {
    this.appFetch.getClient(id).subscribe(res => {
      this.Client = res;
      this.isLoading = false;
    }, () => {
      this.err = true;
      this.isLoading = false;
    })
  }

  deleteAddress(id:Number) {
    this.isLoading = true;
    this.appFetch.deleteAddress(id).subscribe(res => {      
      if(!res) {
        this.getClient(this.clientId);
        this.isLoading = false;
      }
    })
  }

}
