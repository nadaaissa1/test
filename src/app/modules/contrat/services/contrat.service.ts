import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ContratModel } from '../models/contrat.model';
import { ContratResponse } from '../models/IContratResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private readonly apiEndpoint = environment.ManageEngineEndPoint;

  constructor(private httpclient: HttpClient) { }

  // CRUD
  getContracts(): Observable<ContratResponse> {
    return this.httpclient.get<ContratResponse>(this.apiEndpoint + 'contract/all?size=999999&page=0');
  }

  getContractById(id: number) {
    return this.httpclient.get<ContratModel>(this.apiEndpoint + 'contract/' + id);
  }

  createContract(contract: ContratModel): Observable<ContratModel> {
    return this.httpclient.post<ContratModel>(this.apiEndpoint + 'contract', contract);
  }

  updateContrat(contrat: ContratModel): Observable<ContratResponse> {
    return this.httpclient.put<ContratResponse>(this.apiEndpoint + 'contract/' + contrat.id, contrat);
  }

  desactivateContract(contract: ContratModel) {
    return this.httpclient.put<ContratModel>(this.apiEndpoint + 'contract/' + contract.id + '/deactivate', contract);
  }

}
