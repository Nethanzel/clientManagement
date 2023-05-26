import { Component } from '@angular/core';
import { Address } from '../Models/Address';

import { ActivatedRoute } from '@angular/router';
import { FetchModuleService } from "../fetch-module.service";

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})

export class AddressFormComponent {
  constructor(private route:ActivatedRoute, private appFetch:FetchModuleService) {}

  submitted = false; // false shows the form / true hiddes the form
  actionResult:number = 0; // 0 is the initial / 1 means Ok / -1 means Error
  isLoading:boolean = false; //shows the form loading spinner when is set to true

  Action:String = String(this.route.snapshot.paramMap.get('task'));  // when adding new address receives the user id
  requiredId:Number =  Number(this.route.snapshot.paramMap.get('id'));

  formModel:any = new Address(0, "", "", "");

  ngOnInit() {
    if(this.Action == "a") {
      //Block to add a new address
      this.formModel = new Address(0, "", "", "");
    } else {
      // Block to update an existing address
      // bring the address info
      // then, apply data to the formModel (if editing)
      this.isLoading = true;
      this.appFetch.getAddress(Number(this.requiredId)).subscribe(res => {
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
    if(this.Action == "a") {
      //Block to add a new address
      this.isLoading = true;
      this.formModel.uid = this.requiredId;
      this.appFetch.addAddress(this.formModel).subscribe(res => {
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
      // Block to update an existing address
      this.isLoading = true;
      this.appFetch.updateAddress(this.formModel).subscribe(res => {
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