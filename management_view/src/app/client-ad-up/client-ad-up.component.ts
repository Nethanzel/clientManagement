import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchModuleService } from "../fetch-module.service";

@Component({
  selector: 'app-client-ad-up',
  templateUrl: './client-ad-up.component.html',
  styleUrls: ['./client-ad-up.component.css']
})
export class ClientAdUpComponent {
  constructor(private route:ActivatedRoute, private appFetch:FetchModuleService) {}

  isLoading:boolean = true;
  pageTitle:String = "...";
  Action:String = String(this.route.snapshot.paramMap.get('task'));
  requiredId:Number =  Number(this.route.snapshot.paramMap.get('id'));
  backRoute:String = "/";

  ngOnInit() {
    this.backRoute = this.Action != "u" ? "" : `/client/${this.requiredId}`;
    this.pageTitle = this.Action != "u" ? "Add new client" : "Edit client info";
    this.isLoading = false;
  }
}
