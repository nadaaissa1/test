import { NgModule } from '@angular/core';
import { BackOfficeComponent } from './back-office.component';
import { Route, RouterModule } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { MatTableModule } from '@angular/material/table';
import { ContactlistModule } from '../contactlist/contactlist.module';
import { AddEditclientComponent } from './add-editclient/add-editclient.component';
import { ContratModule } from '../contrat/contrat.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


const backofficeRoutes: Route[] = [
  {
      path     : '',
      component: BackOfficeComponent
  }
];

@NgModule({
  declarations: [
    BackOfficeComponent,
    ClientlistComponent,
    AddEditclientComponent
  ],
  imports: [
    MatTableModule,
    ContratModule,
    ContactlistModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forChild(backofficeRoutes)
  ]
})
export class BackOfficeModule { }
