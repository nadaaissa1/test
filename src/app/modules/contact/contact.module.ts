import { NgModule } from '@angular/core';
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
