import { Component } from '@angular/core';
import { Client } from '../Models/Client';

import { ActivatedRoute } from '@angular/router';
import { FetchModuleService } from "../fetch-module.service";

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})

export class ClientFormComponent {
  constructor(private route:ActivatedRoute, private appFetch:FetchModuleService) {}

  submitted = false; // false shows the form / true hiddes the form
  actionResult:number = 0; // 0 is the initial / 1 means Ok / -1 means Error
  isLoading:boolean = true; //shows the form loading spinner when is set to true

  Action:String = String(this.route.snapshot.paramMap.get('task'));  // when adding new address receives the user id
  requiredId:Number =  Number(this.route.snapshot.paramMap.get('id'));

  formModel:any = new Client(0, "", "");

  ngOnInit() {   
     
    if(this.Action != "u") {
      //Block to add a new address
      this.formModel = new Client(0, "", "", "");
      this.isLoading = false;
    } else {
      // Block to update an existing address
      // bring the address info
      // then, apply data to the formModel (if editing)
      this.isLoading = true;
      this.appFetch.getClient(Number(this.requiredId))
      .subscribe(res => {
        this.formModel = res;
        this.isLoading = false;
      }, () => {
        this.submitted = true;
        this.actionResult = -1;
        this.isLoading = false;
      })
    }
  }

  onSubmit() {
    if(this.Action == "add") {
      //Block to add a new client
      this.isLoading = true;
      this.formModel.uid = this.requiredId;

      this.appFetch.addClient(this.formModel)
      .subscribe(res => {
        if(!res) { //All right
          this.submitted = true;
          this.actionResult = 1;
        }
        this.isLoading = false;
      }, () => {
        this.submitted = true;
        this.actionResult = -1;
        this.isLoading = false;
      })
    } else {
      // Block to update an existing client
      this.isLoading = true;
      this.appFetch.updateClient(this.formModel)
      .subscribe(res => {
        if(!res) { // All right
          this.submitted = true;
          this.actionResult = 1;
        }
        this.isLoading = false;
      }, () => {
        this.submitted = true;
        this.actionResult = -1;
        this.isLoading = false;
      })
    }
  }
}
