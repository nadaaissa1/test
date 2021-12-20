import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PortalServicesService
{
    private _pagination: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) {}
   
    get pagination$(): Observable<any>
    {
        return this._pagination.asObservable();
    }
}
