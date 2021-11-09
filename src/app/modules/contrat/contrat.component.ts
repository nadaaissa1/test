import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { AddEditcontratComponent } from './add-editcontrat/add-editcontrat.component';

export interface Contrats {
  title: string;
  type: string;
  dureeDuContrat: string;
  commercial: string;
}

const ELEMENT_DATA: Contrats[] = [
  {title: 'Contrat IaaS', type: 'POC', dureeDuContrat: '01/02/2020', commercial: 'Amel'},
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

  displayedColumns: string[] = ['title', 'type', 'dureeDuContrat', 'commercial', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatTable) table: MatTable<Contrats>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addContrat() {
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
