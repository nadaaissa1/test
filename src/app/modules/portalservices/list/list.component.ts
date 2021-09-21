import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PortalServicesComponent } from '../portalservices.component';
import { PortalServicesService } from '../portalservices.service';
import { MailCategory, Mail } from '../portalservices.types';


@Component({
    selector     : 'portalservices-list',
    templateUrl  : './list.component.html',
    //encapsulation: ViewEncapsulation.None
})
export class PortalServicesListComponent implements OnInit, OnDestroy
{
    @ViewChild('mailList') mailList: ElementRef;

    category: MailCategory;
    mails: Mail[];
    mailsLoading: boolean = false;
    pagination: any;
    selectedMail: Mail;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        public portalservicesComponent: PortalServicesComponent,
        private _portalservicesService: PortalServicesService
    )
    {
    }

    ngOnInit(): void
    {
        // Category
        this._portalservicesService.category$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((category: MailCategory) => {
                this.category = category;
            });

        // Mails
        this._portalservicesService.mails$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mails: Mail[]) => {
                this.mails = mails;
            });

        // Mails loading
        this._portalservicesService.mailsLoading$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mailsLoading: boolean) => {
                this.mailsLoading = mailsLoading;

                // If the mail list element is available & the mails are loaded...
                if ( this.mailList && !mailsLoading )
                {
                    // Reset the mail list element scroll position to top
                    this.mailList.nativeElement.scrollTo(0, 0);
                }
            });

        // Pagination
        this._portalservicesService.pagination$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((pagination) => {
                this.pagination = pagination;
            });

        // Selected mail
        this._portalservicesService.mail$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((mail: Mail) => {
                this.selectedMail = mail;
            });
    }

    ngOnDestroy(): void
    {
    }
}
