import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientModel } from '../models/client.model';
import { UserModel } from '../models/user.model';
import { ClientService } from '../services/client.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {

  form: FormGroup;
  client: ClientModel = new ClientModel();
  users: UserModel[];

  constructor(private dialogRef: MatDialogRef<AddclientComponent>, private fb: FormBuilder, private clientService: ClientService, 
    private userService: UserService) { }

  ngOnInit(): void { 
    this.userService.getUserByAccountAndActive().subscribe(
      data => {   
        this.users = data;    
    });

    this.form = this.fb.group({
      organisation: ['', Validators.required],
      tradeName: ['', Validators.required],
      address: ['', Validators.required],
      sector: ['', Validators.required],
      accountManager: ['', Validators.required],
      firstContactUser: ['', Validators.required],
      firstContactEmail: ['', [Validators.required, Validators.email]],
      firstContactPhone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.clientService.createClient(this.form.getRawValue()).subscribe(data => {
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
