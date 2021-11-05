import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContactlistModule } from '../contactlist/contactlist.module';
import { ContactlistComponent } from '../contactlist/contactlist.component';

const profileRoutes: Route[] = [
  {
      path     : '',
      component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    ContactlistModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild(profileRoutes),
  ]
})
export class ProfileModule { }
