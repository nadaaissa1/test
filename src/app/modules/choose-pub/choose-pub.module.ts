import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosePubComponent } from './choose-pub.component';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BackOfficeModule } from '../back-office/back-office.module';
import { PubComponent } from './pub/pub.component';
import { ImageComponent } from './image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
const pubRoutes: Route[] = [
  {
      path    : '',
      component: ChoosePubComponent
  }
];
@NgModule({
  declarations: [
    ChoosePubComponent,
    PubComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    RouterModule.forChild(pubRoutes),
    NgbModule,
    MatIconModule
  ]
})
export class ChoosePubModule { }
