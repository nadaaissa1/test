import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const profileRoutes: Route[] = [
  {
      path     : '',
      component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    MatTableModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }
