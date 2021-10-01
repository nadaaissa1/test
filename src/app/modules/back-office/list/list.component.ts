import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackOfficeComponent } from '../back-office.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

    constructor(
        public backOfficeomponent: BackOfficeComponent,
    )
    {
    }

    ngOnInit(): void
    {
        
    }

    ngOnDestroy(): void
    {
    }

}
