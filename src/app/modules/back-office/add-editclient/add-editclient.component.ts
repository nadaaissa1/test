import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-editclient',
  templateUrl: './add-editclient.component.html',
  styleUrls: ['./add-editclient.component.scss']
})
export class AddEditclientComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddEditclientComponent>, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstform: ['', Validators.required],
  });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
