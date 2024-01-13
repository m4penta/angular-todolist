import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private apiUrl = 'http://localhost:3000/todo'
  constructor(private _http : HttpClient) { }

  get(): Observable<any> {
    console.log(this._http)
    return this._http.get<any>(this.apiUrl);

    // Gửi yêu cầu GET đến API
  }
  search(title: string){

    return this._http.get(`${this.apiUrl}?q=${title}`)
  }
  Delete(id: any){

    return this._http.delete(`${this.apiUrl}/${id}`)
  }
  create(Data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.post<any>(this.apiUrl, Data, httpOptions).pipe(
      catchError(this.handleError<any>('createTodo'))
    );
  }
  updateTaskStatus(id: string, status: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.patch<any>(`${this.apiUrl}/${id}`, { is_complete: status },httpOptions).pipe(
      catchError(this.handleError<any>('changeTodoStatus'))
    );

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
