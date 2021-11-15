import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';
import { ClientModel } from '../models/client.model';
import { ClientResponse } from '../models/IClientResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly apiEndpoint = environment.ManageEngineEndPoint;
  private listners = new Subject<any>();

  constructor(private httpclient: HttpClient) { }

  // CRUD
  getClients(): Observable<ClientResponse> {
    return this.httpclient.get<ClientResponse>(this.apiEndpoint + 'client/all?size=999999&page=0');
  }

  getClientById(id: number) {
    return this.httpclient.get<ClientResponse>(this.apiEndpoint + 'client/' + id);
  }

  createClient(client: ClientModel): Observable<ClientModel> {
    return this.httpclient.post<ClientModel>(this.apiEndpoint + 'client', client);
  }

  updateClient(client: ClientModel): Observable<ClientModel> {
    return this.httpclient.put<ClientModel>(this.apiEndpoint + 'client/' + client.id, client);
  }

  desactivateClient(client: ClientModel) {
    return this.httpclient.put<ClientModel>(this.apiEndpoint + 'client/' + client.id + '/deactivate', client);
  }

  listen(): Observable<any> {
    return this.listners.asObservable();
  }
  filter(filterBy: string) {
    this.listners.next(filterBy);
  }
}