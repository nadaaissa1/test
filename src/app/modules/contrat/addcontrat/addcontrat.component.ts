import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContratModel } from '../models/contrat.model';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-addcontrat',
  templateUrl: './addcontrat.component.html',
  styleUrls: ['./addcontrat.component.scss']
})
export class AddcontratComponent implements OnInit {

  form: FormGroup;
  contrat: ContratModel = new ContratModel();

  constructor(private dialogRef: MatDialogRef<AddcontratComponent>, private fb: FormBuilder, private contratService: ContratService) {}

  ngOnInit(): void { 
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
