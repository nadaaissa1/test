import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContratModel } from '../models/contrat.model';
import { ContratService } from '../services/contrat.service';
import { Client, ClientResponse } from '../../back-office/models/IClientResponse.model';
import { ClientService } from 'app/modules/back-office/services/client.service';
import { Content, UserResponse } from '../../back-office/models/IUserResponse.model';
import { UserService } from 'app/modules/back-office/services/user.service';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.scss']
})
export class AddcontratComponent implements OnInit {

  form: FormGroup;
  contrat: ContratModel = new ContratModel();
  clients: Client[];
  users: Content[];

  constructor(private dialogRef: MatDialogRef<AddcontratComponent>, private fb: FormBuilder, private contratService: ContratService,
    private clientService: ClientService, private userService: UserService) {}

  ngOnInit(): void { 
    this.clientService.getClients().subscribe(
      (response: ClientResponse) => {
        this.clients = response.Clients;
        console.log(this.clients);     
    }); 

    this.userService.getUsers().subscribe(
      (response: UserResponse) => {
        this.users = response.content;
        console.log(this.users);     
    }); 

    this.form = this.fb.group({
      title: ['', Validators.required],
      clientOrganisation: ['', Validators.required],
      commercialName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.contratService.createContract(this.form.getRawValue()).subscribe(data => {
      console.log(data);
    }, 
    error => console.log(error));
    this.dialogRef.close();
    this.form.reset();
  }

  close() {
    this.dialogRef.close();
  }
}
