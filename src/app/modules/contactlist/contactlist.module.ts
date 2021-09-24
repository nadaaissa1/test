import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactlistComponent } from './contactlist.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ContactlistComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    ContactlistComponent
  ]
})
export class ContactlistModule { }
