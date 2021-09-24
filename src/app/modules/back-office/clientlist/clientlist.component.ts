import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface Clients {
  organization: string;
  socialReason: string;
  adress: string;
  domain: string;
}

const ELEMENT_DATA: Clients[] = [
  {organization : 'TT', socialReason: 'SARL', adress: 'Rue Lac Tchad - 1053 Berges du Lac - Tunis', domain: 'Telco'},
  {organization: 'Orange', socialReason: 'SA', adress: 'Rue de la Feuille d’Érable Résidence La Merveille du Lac Cité les Pins Lac 2 1053 Tunis, Tunisie', domain: 'Telco'}
];

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['organization', 'socialReason', 'adress', 'domain', 'actions'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<Clients>;

  addClient() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
    // this.router.navigate(['role']);

    // const dialogRef = this.dialog.open(AddEditcontactComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  
  
  // removeclient() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
