import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { TranslocoModule } from '@ngneat/transloco';
import { PubComponent } from '../pub/pub.component';

const dashboardRoutes: Route[] = [
  {
      path     : '',
      component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    PubComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    SharedModule,
    TranslocoModule
  ]
})
export class DashboardModule { }
