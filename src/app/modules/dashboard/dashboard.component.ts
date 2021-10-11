import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vCloudDirectorUrlLogin = environment.vCloudDirectorUrlLogin;
  ManageEngineUrlLogin = environment.ManageEngineUrlLogin;

  constructor() { }

  ngOnInit(): void {
  }

}
