import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientModel } from '../models/client.model';
import { UserModel } from '../models/user.model';
import { ClientService } from '../services/client.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.scss']
})
export class EditclientComponent implements OnInit {

  form: FormGroup;
  client: ClientModel = new ClientModel();
  users: UserModel[];

  constructor(
    private dialogRef: MatDialogRef<EditclientComponent>,
    private fb: FormBuilder,
    private clientService: ClientService,
    private userService: UserService,
     @Inject(MAT_DIALOG_DATA) public data: ClientModel,
     ) {
     }

  ngOnInit(): void {
    this.userService.getUserByAccountAndActive().subscribe(
      data => {   
        this.users = data;    
    });

    this.form = this.fb.group({
      id:[this.data.id],
      organisation: [this.data.organisation , Validators.required],
      tradeName: [this.data.tradeName, Validators.required],
      address: [this.data.address, Validators.required],
      sector: [this.data.sector, Validators.required],
      accountManager: [this.data.user, Validators.required],
      firstContactUser: [this.data.firstContactUser, Validators.required],
      firstContactEmail: [this.data.firstContactEmail, [Validators.required, Validators.email]],
      firstContactPhone: [this.data.firstContactPhone, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]      
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.clientService.updateClient(this.form.getRawValue()).subscribe(data => {
      (data);
    }, 
    error => (error));
    this.dialogRef.close();
    this.form.reset();
  }

  close() {
    this.dialogRef.close();
  }
}
