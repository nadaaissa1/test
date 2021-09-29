import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddEditcontratComponent } from './add-editcontrat/add-editcontrat.component';

export interface Contrats {
  name: string;
  type: string;
  dateDebut: string;
  dateFin: string;
  commercial: string;
}

const ELEMENT_DATA: Contrats[] = [
  {name: 'Contrat IaaS', type: 'POC', dateDebut: '01/02/2020', dateFin: '15/04/2022', commercial: 'Amel'},
];

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'type', 'dateDebut', 'dateFin', 'commercial', 'actions'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<Contrats>;

  addContrat() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
    // this.router.navigate(['role']);
    const dialogRef = this.dialog.open(AddEditcontratComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  // removeContrat() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
