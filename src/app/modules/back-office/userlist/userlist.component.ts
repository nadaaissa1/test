import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { AddEdituserComponent } from '../add-edituser/add-edituser.component';

export interface Users {
  employeeID: string;
  name: string;
  jobTitle: string;
  mail: string;
  domain: string;
  phoneNumber: string;
  mobileNumber: string;
}

const ELEMENT_DATA: Users[] = [
  {employeeID: '145RFG954', name: 'Giacomo Guilizzoni', jobTitle: 'Founder & CEO', mail: 'giacomo.guilizzoni@gmail.com', domain: 'Telco', phoneNumber: '71524624', mobileNumber: '21584965'},
  {employeeID: '742FDS632', name: 'Marco Botton', jobTitle: 'Tuttofare', mail: 'marco.botton@gmail.com', domain: 'Telco', phoneNumber: '73528963', mobileNumber: '58963159'},
  {employeeID: '157AGO521', name: 'Maria Maclachlan', jobTitle: 'Better Half', mail: 'maria.maclachlan@gmail.com', domain: 'Telco', phoneNumber: '71842147', mobileNumber: '90874563'},
];

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit, AfterViewInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  displayedColumns: string[] = ['employeeID', 'name', 'jobTitle', 'mail', 'domain', 'phoneNumber', 'mobileNumber', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatTable) table: MatTable<Users>;
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

  addUser() {
    const dialogRef = this.dialog.open(AddEdituserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  // removeUser() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
