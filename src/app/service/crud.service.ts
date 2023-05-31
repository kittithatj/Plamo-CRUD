import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { Observable, throwError } from 'rxjs';

export class Plamo {
  id!: string;
  name!: string;
  grade!: string;
  brand!: string;
  price!: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Node Express API
  REST_API: string = 'http://localhost:8000/api';

  //Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Add Plamo
  AddPLamo(data: Plamo): Observable<any> {
    let API_URL = `${this.REST_API}/add-plamo`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Get all plamo
  GetPlamos() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  //Get plamo by id
  GetPlamo(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/get-plamo/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  //Update plamo
  updatePlamo(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-plamo/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  //Delete plamo
  deletePlamo(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-plamo/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }

  //Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Handle client error
      errorMessage = error.error.message;
    } else {
      //Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
