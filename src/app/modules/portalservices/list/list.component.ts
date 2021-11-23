import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortalServicesComponent } from '../portalservices.component';

@Component({
    selector     : 'portalservices-list',
    templateUrl  : './list.component.html',
})
export class PortalServicesListComponent implements OnInit, OnDestroy
{

    constructor(public portalservicesComponent: PortalServicesComponent) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {}
}
