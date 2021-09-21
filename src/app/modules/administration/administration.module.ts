import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { Route, RouterModule } from '@angular/router';

const administrationRoutes: Route[] = [
  {
      path     : '',
      component: AdministrationComponent
  }
];

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    RouterModule.forChild(administrationRoutes)
  ]
})
export class AdministrationModule { }
