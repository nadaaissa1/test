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
  submitted = false;

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
      mobile: ['', Validators.required],
      account: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }

  save() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.user);
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data)
      // this.user = new UserModel();
      // this.userService.filter('Register Click');
    }, 
    error => console.log(error));
    this.dialogRef.close();
    this.submitted = false;
    this.form.reset();
    
  }

 

  close() {
    this.dialogRef.close(); 
  }

}
