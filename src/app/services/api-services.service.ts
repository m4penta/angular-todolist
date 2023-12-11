import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
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

    return this._http.get(this.apiUrl, {params: {title}})
  }
}
