import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleModel } from '../models/role.model';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  form: FormGroup;
  user: UserModel = new UserModel();
  role: RoleModel;

  constructor(private dialogRef: MatDialogRef<AdduserComponent>, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      employeeID: ['', [Validators.required, Validators.maxLength(10)]],
      last_name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      middle_name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      first_name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      loginName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      userpassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      jobTitle: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      mobile: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      account: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.form.patchValue({"role": [this.form.get("role").value]})
    console.log(this.form.get("role").value);
    this.userService.createUser(this.form.getRawValue()).subscribe(data => {
      console.log(data)
    }, 
    error => console.log(error));
    this.dialogRef.close();
    this.form.reset(); 
  }

  close() {
    this.dialogRef.close();  
  }
}
