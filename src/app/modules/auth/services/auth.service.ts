import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ChangePasswordModel } from '../models/ChangePasswordModel.model';
import { ForgotPasswordModel } from '../models/ForgotPasswordModel.model';
import { LoginModel } from '../models/login.model';
import { LogOutModel } from '../models/logOut.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiEndpoint = environment.ManageEngineEndPoint;
  // private userSubject: BehaviorSubject<UserComponent>;
  // public user: Observable<User>;

  constructor(private httpclient: HttpClient) {
  }

  // CRUD
  signIn(credentials: LoginModel): Observable<any> {
    return this.httpclient.post<any>(this.apiEndpoint + 'auth/login', credentials)
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
  signOut(token: LogOutModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpclient.put<any>(this.apiEndpoint + 'auth/logout', token, httpOptions)
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
  changePassword(loginName: String, passwords: ChangePasswordModel): Observable<any> {
    return this.httpclient.put<any>(this.apiEndpoint + 'user/changePassword/'+loginName, passwords)
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
  forgotPassword(email: String): Observable<any> {
   
    return this.httpclient.post(this.apiEndpoint + 'user/forgotPassword?email='+email, null,{responseType: 'text'})
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
  resetForgottenPassword(passwords: ForgotPasswordModel): Observable<any> {
 
    return this.httpclient.post(this.apiEndpoint + 'user/resetforgottenPassword', passwords,{responseType: 'text'})
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }


}
