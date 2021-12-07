import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL = "/assest/Data/employee.json";

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.http.get(this.URL)
      .pipe
      (
        catchError((error: HttpErrorResponse) => {
          console.log(error.message);
          return throwError(error.message || 'server error');
        })
      )
  }
}
