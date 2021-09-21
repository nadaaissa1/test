import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Route, RouterModule } from '@angular/router';

const contactRoutes: Route[] = [
  {
      path     : '',
      component: ContactComponent
  }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(contactRoutes)
  ]
})
export class ContactModule { }
