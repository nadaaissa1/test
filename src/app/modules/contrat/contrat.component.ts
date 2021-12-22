import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddcontratComponent } from './addcontrat/addcontrat.component';
import { EditcontratComponent } from './editcontrat/editcontrat.component';
import { ContratModel } from './models/contrat.model';
import { Contract, ContratResponse } from './models/IContratResponse.model';
import { ContratService } from './services/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  displayedColumns: string[] = ['title', 'organisation', 'commercial', 'description', 'type', 'startDate', 'endDate', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  contracts: Contract[];
  contractToUpdate: ContratModel;

  constructor(public dialog: MatDialog, private contratService: ContratService) {}

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.contratService.getContracts().subscribe(
      (response: ContratResponse) => {
        this.contracts = response.Contracts;
        this.dataSource = new MatTableDataSource(this.contracts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;      
    }); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addContrat() {
    const dialogRef = this.dialog.open(AddcontratComponent, {
      width: "60%",
      height: "96%"});
    dialogRef.afterClosed().subscribe(result => {
      (`Dialog result: ${result}`);
      this.initDataSource();
    });
  }

  editContrat(contract: ContratModel) {
    (contract);
    if (!contract)
    {
      return;
    }
    this.contratService.getContractById(contract.id).subscribe(data => {
      this.contractToUpdate = data;
      this.EditModal(this.contractToUpdate);
    });   
  }

  EditModal(contractToUpdate: ContratModel) {
    const dialogRef = this.dialog.open(EditcontratComponent, {
      width: "60%",
      height: "96%", 
      data: contractToUpdate
    });

    dialogRef.afterClosed().subscribe(result => {
      (`Dialog result: ${result}`);
      this.initDataSource();
    });
  }

  desactivateContrat(contrat: ContratModel): void {
    if (contrat.active == true) {
      this.contratService.desactivateContract(contrat).subscribe(data => {
        ('contrat desactivation' + contrat);
        this.initDataSource();
      });
    }
  }
}
