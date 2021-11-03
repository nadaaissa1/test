import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';
import { UserResponse } from '../models/IUserResponse.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiEndpoint = environment.ManageEngineEndPoint;
  private listners = new Subject<any>();

  constructor(private httpclient: HttpClient) { }

  // CRUD
  getUsers(): Observable<UserResponse> {
    return this.httpclient.get<UserResponse>(this.apiEndpoint + 'user/all?size=999999&page=0');
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.httpclient.post<UserModel>(this.apiEndpoint + 'auth/addUser', user);
  }

  listen(): Observable<any> {
    return this.listners.asObservable();
  }
  filter(filterBy: string) {
    this.listners.next(filterBy);
  }
}
