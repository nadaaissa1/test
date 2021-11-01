import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiEndpoint = environment.ManageEngineEndPoint;

  constructor(private httpclient: HttpClient) { }

  // CRUD
  getUsers(): Observable<UserModel[]> {
    return this.httpclient.get<UserModel[]>(this.apiEndpoint + 'user/all');
  }

  public createUser(user: UserModel): Observable<UserModel> {
    return this.httpclient.post<UserModel>(this.apiEndpoint + 'auth/addUser', user);
  }
}
