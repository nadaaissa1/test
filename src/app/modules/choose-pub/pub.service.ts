import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ImageModel } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class PubService {
  private readonly apiEndpoint = environment.ManageEngineEndPoint;
  // private userSubject: BehaviorSubject<UserComponent>;
  // public user: Observable<User>;

  constructor(private httpclient: HttpClient) {
  }

  // CRUD
  getImages(): Observable<any> {
    return this.httpclient.get<any>(this.apiEndpoint + 'image/')
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }

  PickImage(imageName: String, isPicked: ImageModel): Observable<any> {
    return this.httpclient.put<any>(this.apiEndpoint + 'image/Picker/'+imageName, isPicked)
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
  uploadImage(image:any): Observable<any> {
    return this.httpclient.post<any>(this.apiEndpoint + 'image/upload', image, {
      reportProgress: true,
      observe: 'events'
  })
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
  deleteImage(imageName: String): Observable<any> {
    return this.httpclient.delete<any>(this.apiEndpoint + 'image/'+imageName)
            .pipe(catchError(error => throwError(error.message || "Server Error")))
    
  }
}
