import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edituser',
  templateUrl: './add-edituser.component.html',
  styleUrls: ['./add-edituser.component.scss']
})
export class AddEdituserComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddEdituserComponent>, private fb: FormBuilder,) { }

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
