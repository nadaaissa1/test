import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  vCloudDirectorUrlLogin = environment.vCloudDirectorUrlLogin;
  ManageEngineUrlLogin = environment.ManageEngineUrlLogin;
  constructor() { }

  ngOnInit(): void {
  }

}
