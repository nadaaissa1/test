import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PortalServicesComponent } from '../portalservices.component';
import { PortalServicesService } from '../portalservices.service';
import { MailCategory, PortalServices } from '../portalservices.types';


@Component({
    selector     : 'portalservices-list',
    templateUrl  : './list.component.html',
    //encapsulation: ViewEncapsulation.None
})
export class PortalServicesListComponent implements OnInit, OnDestroy
{

    constructor(
        public portalservicesComponent: PortalServicesComponent,
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
