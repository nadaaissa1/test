import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  selected = 'Veuillez choisir un rôle';

  constructor(private dialogRef: MatDialogRef<AdduserComponent>, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data)
      // this.user = new UserModel();
      this.userService.filter('Register Click');
    }, 
    error => console.log(error));
    this.dialogRef.close();
    
  }

 

  close() {
    this.dialogRef.close();
    
  }

}
