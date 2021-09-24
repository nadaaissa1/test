import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-editcontact',
  templateUrl: './add-editcontact.component.html',
  styleUrls: ['./add-editcontact.component.scss']
})
export class AddEditcontactComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddEditcontactComponent>, private fb: FormBuilder,) { }

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
