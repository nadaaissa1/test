import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { FuseNavigationItem, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { PortalServicesService } from '../portalservices.service';
import { MailFilter, MailFolder, MailLabel } from '../portalservices.types';
import { portalservicesmenudata } from './portalservicesmenudata';


@Component({
    selector     : 'portalservices-sidebar',
    templateUrl  : './sidebar.component.html',
    styleUrls    : ['./sidebar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PortalServicesSidebarComponent implements OnInit, OnDestroy
{
    menuData: FuseNavigationItem[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        
    )
    {
    }

    ngOnInit(): void
    {
        this.menuData = portalservicesmenudata;
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
