import { Component, OnDestroy, OnInit } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Subject } from 'rxjs';
import { backofficemenudata } from './back-officemenudata';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    
    menuData: FuseNavigationItem[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor() {}

    ngOnInit(): void {
        this.menuData = backofficemenudata;
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
