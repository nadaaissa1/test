import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
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
export class ContactlistComponent implements OnInit, AfterViewInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['name', 'jobTitle', 'mail', 'phoneNumber', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatTable) table: MatTable<Contacts>;
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
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
    // this.router.navigate(['role']);
    const dialogRef = this.dialog.open(AddEditcontactComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  // removeUser() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
