import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientModel } from '../models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {

  form: FormGroup;
  client: ClientModel = new ClientModel();

  constructor(private dialogRef: MatDialogRef<AddclientComponent>, private fb: FormBuilder, private clientService: ClientService) { }

  ngOnInit(): void {
    
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
