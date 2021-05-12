import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', this.baseUrl + '/download', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }



}
