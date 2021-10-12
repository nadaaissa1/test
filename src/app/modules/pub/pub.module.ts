import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PubComponent } from './pub.component';
import { SharedModule } from 'app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PubComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
  ],
  exports: [
    PubComponent,
    
  ]
})
export class PubModule { }
