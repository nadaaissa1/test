import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns: string[] = ['employeeID', 'name', 'jobTitle', 'emailid', 'phone', 'mobile', 'account', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: Content[];
  dataSource: any;

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.initDataSource();
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
    const dialogRef = this.dialog.open(AdduserComponent, {
      width: "60%",
      height: "96%"});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.initDataSource();
    });
  }

  desactivateUserPopup(user: any) {
    this.desactivateUser(user);
  }


  desactivateUser(user: UserModel): void {
    if (user.active == true) {
      this.userService.desactivateUser(user).subscribe(data => {
        console.log('User desactivation' + user);
        this.initDataSource();
      });
    }
  }
}
