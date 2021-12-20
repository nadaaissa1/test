import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { FuseNavigationItem} from '@fuse/components/navigation';
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

    constructor() {}

    ngOnInit(): void {
        this.menuData = portalservicesmenudata;
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
