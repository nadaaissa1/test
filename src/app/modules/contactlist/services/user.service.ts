import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/IUserResponse.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiEndpoint = environment.ManageEngineEndPoint;

  constructor(private httpclient: HttpClient) { }

  // CRUD
  getUsers(): Observable<UserResponse> {
    return this.httpclient.get<UserResponse>(this.apiEndpoint + 'user/all?size=999999&page=0');
  }

  getUserById(id: number) {
    return this.httpclient.get<UserResponse>(this.apiEndpoint + '/' + id);
  }

  createUser(user: UserModel): Observable<UserModel> {
    return this.httpclient.post<UserModel>(this.apiEndpoint + 'auth/addUser', user);
  }

  desactivateUser(user: UserModel) {
    return this.httpclient.put<UserModel>(this.apiEndpoint + 'user/' + user.id + '/deactivate', user);
  }

}
