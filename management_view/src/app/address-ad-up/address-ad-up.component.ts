import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchModuleService } from "../fetch-module.service";

@Component({
  selector: 'app-address-ad-up',
  templateUrl: './address-ad-up.component.html',
  styleUrls: ['./address-ad-up.component.css']
})
export class AddressAdUpComponent {
  constructor(private route:ActivatedRoute, private appFetch:FetchModuleService) {}

  pageTitle:String = "...";
  Action:String = String(this.route.snapshot.paramMap.get('task'));
  requiredId:Number =  Number(this.route.snapshot.paramMap.get('id'));
  backRoute:String = "/";

  ngOnInit() {
    this.pageTitle = this.Action == "a" ? "Add new address" : "Edit address";
    this.backRoute = this.Action == "a" ? `client/${this.requiredId}` : `client/${this.Action}`;
  }
}
