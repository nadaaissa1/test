import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { MailCategory, MailFilter, MailFolder, MailLabel, PortalServices } from './portalservices.types';


@Injectable({
    providedIn: 'root'
})
export class PortalServicesService
{
    private _pagination: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient)
    {
    }
   
    get pagination$(): Observable<any>
    {
        return this._pagination.asObservable();
    }
}
