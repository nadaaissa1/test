import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContratModel } from '../models/contrat.model';
import { ContratService } from '../services/contrat.service';
import { Client, ClientResponse } from '../../back-office/models/IClientResponse.model';
import { ClientService } from 'app/modules/back-office/services/client.service';
import { Content, UserResponse } from '../../back-office/models/IUserResponse.model';
import { UserService } from 'app/modules/back-office/services/user.service';

@Component({
  selector: 'app-editcontrat',
  templateUrl: './editcontrat.component.html',
  styleUrls: ['./editcontrat.component.scss']
})
export class EditcontratComponent implements OnInit {

  form: FormGroup;
  contrat: ContratModel = new ContratModel();
  clients: Client[];
  users: Content[];

  constructor(private dialogRef: MatDialogRef<EditcontratComponent>, private fb: FormBuilder, private contratService: ContratService,
    @Inject(MAT_DIALOG_DATA) public data: ContratModel, private clientService: ClientService, private userService: UserService) {
      console.log('Contract data', data);
     }

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
      id:[this.data.id],
      title: [this.data.title, Validators.required],
      clientOrganisation: [this.data.client.organisation, Validators.required],
      commercialName: [this.data.commercial, Validators.required],
      description: [this.data.description, Validators.required],
      type: [this.data.type, Validators.required],
      start_date: [this.data.startDate, Validators.required],
      end_date: [this.data.endDate, Validators.required],
    });
  }

  get f() { return this.form.controls; }

  save() {
    console.log(this.form.getRawValue());
    this.contratService.updateContrat(this.form.getRawValue()).subscribe(data => {
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
