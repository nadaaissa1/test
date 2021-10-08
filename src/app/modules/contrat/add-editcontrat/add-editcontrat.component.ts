import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-editcontrat',
  templateUrl: './add-editcontrat.component.html',
  styleUrls: ['./add-editcontrat.component.scss']
})
export class AddEditcontratComponent implements OnInit {

  form: FormGroup;
  selected = 'Veuillez choisir un type';

  constructor(private dialogRef: MatDialogRef<AddEditcontratComponent>, private fb: FormBuilder,) { }

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
