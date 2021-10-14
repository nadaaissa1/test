import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContactlistModule } from '../contactlist/contactlist.module';
import { AddEditcontactComponent } from '../contactlist/add-editcontact/add-editcontact.component';
import { SharedModule } from 'app/shared/shared.module';

const profileRoutes: Route[] = [
  {
      path     : '',
      component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    AddEditcontactComponent
  ],
  imports: [
    ContactlistModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(profileRoutes),
    SharedModule,
  ]
})
export class ProfileModule { }
