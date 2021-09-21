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
    filters: MailFilter[];
    folders: MailFolder[];
    labels: MailLabel[];
    menuData: FuseNavigationItem[] = [];
    private _filtersMenuData: FuseNavigationItem[] = [];
    private _foldersMenuData: FuseNavigationItem[] = [];
    private _labelsMenuData: FuseNavigationItem[] = [];
    private _otherMenuData: FuseNavigationItem[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _portalservicesService: PortalServicesService,
        private _matDialog: MatDialog,
        private _fuseNavigationService: FuseNavigationService
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

    // private _generateFoldersMenuLinks(): void
    // {
    //     // Reset the folders menu data
    //     this._foldersMenuData = [];

    //     // Iterate through the folders
    //     this.folders.forEach((folder) => {

    //         // Generate menu item for the folder
    //         const menuItem: FuseNavigationItem = {
    //             id   : folder.id,
    //             title: folder.title,
    //             type : 'basic',
                
    //             link : '/apps/portalservices/' + folder.slug
    //         };

    //         // If the count is available and is bigger than zero...
    //         if ( folder.count && folder.count > 0 )
    //         {
    //             // Add the count as a badge
    //             menuItem['badge'] = {
    //                 title: folder.count + ''
    //             };
    //         }

    //         // Push the menu item to the folders menu data
    //         this._foldersMenuData.push(menuItem);
    //     });

    //     // Update the menu data
    //     this._updateMenuData();
    // }
 
    // private _generateFiltersMenuLinks(): void
    // {
    //     // Reset the filters menu
    //     this._filtersMenuData = [];

    //     // Iterate through the filters
    //     this.filters.forEach((filter) => {

    //         // Generate menu item for the filter
    //         this._filtersMenuData.push({
    //             id   : filter.id,
    //             title: filter.title,
    //             type : 'basic',
    //             icon : filter.icon,
    //             link : '/apps/portalservices/filter/' + filter.slug
    //         });
    //     });

    //     // Update the menu data
    //     this._updateMenuData();
    // }

    // private _generateLabelsMenuLinks(): void
    // {
    //     // Reset the labels menu
    //     this._labelsMenuData = [];

    //     // Iterate through the labels
    //     this.labels.forEach((label) => {

    //         // Generate menu item for the label
    //         this._labelsMenuData.push({
    //             id     : label.id,
    //             title  : label.title,
    //             type   : 'basic',
    //             icon   : 'heroicons_outline:tag',
    //             classes: {
    //                 //icon: labelColorDefs[label.color].text
    //             },
    //             link   : '/apps/portalservices/label/' + label.slug
    //         });
    //     });

    //     // Update the menu data
    //     this._updateMenuData();
    // }

    // private _generateOtherMenuLinks(): void
    // {
    //     // Settings menu
    //     this._otherMenuData.push({
    //         title: 'Settings',
    //         type : 'basic',
    //         icon : 'heroicons_outline:cog',
    //         link : '/apps/portalservices/settings'
    //     });

    //     // Update the menu data
    //     this._updateMenuData();
    // }

    // private _updateMenuData(): void
    // {
    //     this.menuData = [
    //         {
    //             title   : 'Services',
    //             type    : 'group',
    //             children: [
    //                 ...this._foldersMenuData
    //             ]
    //         },
    //         {
    //             title   : 'FILTERS',
    //             type    : 'group',
    //             children: [
    //                 ...this._filtersMenuData
    //             ]
    //         },
    //         {
    //             title   : 'LABELS',
    //             type    : 'group',
    //             children: [
    //                 ...this._labelsMenuData
    //             ]
    //         },
    //         {
    //             type: 'spacer'
    //         },
    //         ...this._otherMenuData
    //     ];
    // }

    // private _updateNavigationBadge(folders: MailFolder[]): void
    // {
    //     // Get the inbox folder
    //     const inboxFolder = this.folders.find(folder => folder.slug === 'inbox');

    //     // Get the component -> navigation data -> item
    //     const mainNavigationComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

    //     // If the main navigation component exists...
    //     if ( mainNavigationComponent )
    //     {
    //         const mainNavigation = mainNavigationComponent.navigation;
    //         const menuItem = this._fuseNavigationService.getItem('apps.mailbox', mainNavigation);

    //         // Update the badge title of the item
    //         menuItem.badge.title = inboxFolder.count + '';

    //         // Refresh the navigation
    //         mainNavigationComponent.refresh();
    //     }
    // }
}
