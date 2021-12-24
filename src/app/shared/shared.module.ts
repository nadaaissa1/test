import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgImageSliderModule,    
        MatTooltipModule    
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgImageSliderModule,
        MatTooltipModule
    ],
    providers: [
        
    ]
})
export class SharedModule
{
}
