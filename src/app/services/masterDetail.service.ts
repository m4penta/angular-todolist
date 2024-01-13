import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class MasterDetailService {
  private dogUrl = 'http://localhost:3000/dogs';
  private dogtypeUrl = 'http://localhost:3000/dogTypes';

constructor(private _http : HttpClient) { }
//master

//detail

//error
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
}
}
