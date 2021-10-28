import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiEndpoint = environment.MultiPortalEndPoint;
  
  constructor(private httpclient: HttpClient) { 
  }

  // CRUD
  signIn(credentials: LoginModel): Observable<any>
  {
     return this.httpclient.post(this.apiEndpoint + 'auth/login', credentials);
  }
}
