import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddclientComponent } from '../addclient/addclient.component';
import { EditclientComponent } from '../editclient/editclient.component';
import { ClientModel } from '../models/client.model';
import { Client, ClientResponse } from '../models/IClientResponse.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {

  displayedColumns: string[] = ['organisation', 'tradeName', 'address', 'sector', 'user', 'firstContactUser', 'firstContactEmail', 'firstContactPhone', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  clients: Client[];
  clientToUpdate:ClientModel;

  constructor(public dialog: MatDialog, private clientService: ClientService) { }

  ngOnInit(): void {
    this.initDataSource();
  }

  initDataSource() {
    this.clientService.getClients().subscribe(
      (response: ClientResponse) => {
        this.clients = response.Clients;
        console.log(this.clients);
        console.log(this.paginator);
        this.dataSource = new MatTableDataSource(this.clients);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;      
    }); 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addClient() {
    const dialogRef = this.dialog.open(AddclientComponent, {
      width: "60%",
      height: "96%"});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.initDataSource();
    });
  }

  editClient(client: ClientModel) {
    this.clientService.getClientById(client.id).subscribe(data => {
      this.clientToUpdate = data;
      this.EditModal(this.clientToUpdate);
    });   
  }

  EditModal(clientToUpdate: ClientModel) {
    const dialogRef = this.dialog.open(EditclientComponent, {
      width: "60%",
      height: "96%", 
      data: clientToUpdate
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.initDataSource();
    });
  }

  desactivateClient(client: ClientModel): void {
    if (client.active == true) {
      this.clientService.desactivateClient(client).subscribe(data => {
        console.log('client desactivation' + client);
        this.initDataSource();
      });
    }
  }
}
