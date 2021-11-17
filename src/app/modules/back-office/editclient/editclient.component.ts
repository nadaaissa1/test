import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ClientModel } from '../models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.scss']
})
export class EditclientComponent implements OnInit {

  form: FormGroup;
  client: ClientModel = new ClientModel();

  constructor(
    private dialogRef: MatDialogRef<EditclientComponent>,
    private fb: FormBuilder,
    private clientService: ClientService,
     @Inject(MAT_DIALOG_DATA) public data: ClientModel,
     ) {
       console.log('Client data', data);
     }

  ngOnInit(): void {

    this.form = this.fb.group({
      id:[this.data.id],
      organisation: [this.data.organisation , Validators.required],
      tradeName: [this.data.tradeName, Validators.required],
      address: [this.data.address, Validators.required],
      sector: [this.data.sector, Validators.required],
      accountManager: [this.data.accountManager, Validators.required],
      firstContactUser: [this.data.firstContactUser, Validators.required],
      firstContactEmail: [this.data.firstContactEmail, [Validators.required, Validators.email]],
      firstContactPhone: [this.data.firstContactPhone, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]      
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.clientService.updateClient(this.form.getRawValue()).subscribe(data => {
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
