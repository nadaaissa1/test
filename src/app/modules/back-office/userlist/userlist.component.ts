import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { AdduserComponent } from '../adduser/adduser.component';
import { Content, UserResponse } from '../models/IUserResponse.model';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  displayedColumns: string[] = ['employeeID', 'name', 'jobTitle', 'emailid', 'domain_Name', 'phone', 'mobile', 'account', 'site', 'actions'];
  // @ViewChild(MatTable) table: MatTable<Users>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: Content[];
  dataSource: any;
  constructor(public dialog: MatDialog, private userService: UserService) {
    this.userService.listen().subscribe((m:any)=>{
      console.log(m);
      this.initDataSource();
    })
  }

  ngOnInit(): void {
    this.initDataSource()
  }

  initDataSource() {
    this.userService.getUsers().subscribe(
      (response: UserResponse) => {
        this.users = response.content;
        console.log(this.users);
        console.log(this.paginator);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;      
    }); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser() {
    const dialogRef = this.dialog.open(AdduserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  // removeUser() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

}
