import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgImageSliderModule,        
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgImageSliderModule,
    ],
    providers: [
        
    ]
})
export class SharedModule
{
}
