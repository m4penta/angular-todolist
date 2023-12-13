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

  getTodoList(): Observable<any> {
    console.log(this._http)
    return this._http.get<any>(this.apiUrl);

    // Gửi yêu cầu GET đến API
  }
  searchTodo(title: string){

    return this._http.get(`${this.apiUrl}?q=${title}`)
  }
  DeleteTodo(id: string){

    return this._http.delete(`${this.apiUrl}/${id}`)
  }
  createTodo(todoData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this._http.post<any>(this.apiUrl, todoData, httpOptions).pipe(
      catchError(this.handleError<any>('createTodo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
