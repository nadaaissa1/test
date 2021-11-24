import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContactlistModule } from '../contactlist/contactlist.module';
import { BackOfficeModule } from '../back-office/back-office.module';

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
    FormsModule,
    RouterModule.forChild(profileRoutes),
    BackOfficeModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class ProfileModule {}
