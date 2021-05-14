import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../api/employe';
import { Entrance } from '../api/entrance';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getEntrance(): Observable<Entrance> {
    return this.http.get<Entrance>(this.apiURL + '/entrances')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getEntranceByDate(date): Observable<Entrance> {
    return this.http.get<Entrance>(this.apiURL + '/entrances/' + date)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employees/create', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/employees/update/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id) {
    return this.http.delete<Employee>(this.apiURL + '/employees/delete/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  enterEmployee(id) {
    return this.http.get<Entrance>(this.apiURL + '/employee/' + id + '/enter', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  departEmployee(id) {
    return this.http.get<Entrance>(this.apiURL + '/employee/' + id + '/depart', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  enter(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employee/enter', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }



  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
