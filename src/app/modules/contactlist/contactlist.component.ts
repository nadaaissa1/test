import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddEditcontactComponent } from './add-editcontact/add-editcontact.component';

export interface Contacts {
  name: string;
  jobTitle: string;
  mail: string;
  phoneNumber: number;
}

const ELEMENT_DATA: Contacts[] = [
  {name: 'Giacomo Guilizzoni', jobTitle: 'Founder & CEO', mail: 'giacomo.guilizzoni@gmail.com', phoneNumber: 21584965},
  {name: 'Marco Botton', jobTitle: 'Tuttofare', mail: 'marco.botton@gmail.com', phoneNumber: 58963159},
  {name: 'Maria Maclachlan', jobTitle: 'Better Half', mail: 'maria.maclachlan@gmail.com', phoneNumber: 90874563},
];

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'jobTitle', 'mail', 'phoneNumber', 'actions'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<Contacts>;

  addContact() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
    // this.router.navigate(['role']);
    const dialogRef = this.dialog.open(AddEditcontactComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  // removeContact() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
