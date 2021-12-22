import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { ContratModel } from '../contrat/models/contrat.model';
import { Contract, ContratResponse } from '../contrat/models/IContratResponse.model';
import { ContratService } from '../contrat/services/contrat.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vCloudDirectorUrlLogin = environment.vCloudDirectorUrlLogin;
  ManageEngineUrlLogin = environment.ManageEngineUrlLogin;
  contracts: Contract[];
  contractToUpdate: ContratModel;
  displayedColumns: string[] = ['title', 'organisation', 'commercial', 'description', 'type', 'startDate', 'endDate', 'actions'];
  dataSource: any;

  constructor(private contratService: ContratService) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.contratService.getContracts().subscribe(
      (response: ContratResponse) => {
        this.contracts = response.Contracts;
                this.dataSource = new MatTableDataSource(this.contracts);  
    }); 
  }
}
