import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { AddEditclientComponent } from '../add-editclient/add-editclient.component';

export interface Clients {
  organization: string;
  socialReason: string;
  adress: string;
  domain: string;
}

const ELEMENT_DATA: Clients[] = [
  {organization : 'TT', socialReason: 'SARL', adress: 'Rue Lac Tchad - 1053 Berges du Lac - Tunis', domain: 'Telco'},
  {organization: 'Orange', socialReason: 'SA', adress: 'Rue de la Feuille d’Érable Résidence La Merveille du Lac Cité les Pins Lac 2 1053 Tunis, Tunisie', domain: 'Telco'},
];

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit, AfterViewInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['organization', 'socialReason', 'adress', 'domain', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatTable) table: MatTable<Clients>;
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

  addClient() {
    const dialogRef = this.dialog.open(AddEditclientComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  // removeclient() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
