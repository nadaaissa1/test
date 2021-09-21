import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface Contacts {
  name: string;
  departement: string;
  nickname: string;
  employee: string;
}

const ELEMENT_DATA: Contacts[] = [
  {name: 'Giacomo Guilizzoni (Founder & CEO)', departement: 'Vente', nickname: 'Peldi', employee: ''},
  {name: 'Marco Botton (Tuttofare)', departement: 'Technique', nickname: '', employee: ''},
  {name: 'Maria Maclachlan (Better Half)', departement: 'Vente', nickname: 'Patata', employee: ''},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'departement', 'nickname', 'employee'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<Contacts>;

  addContact() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  // removeContact() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
