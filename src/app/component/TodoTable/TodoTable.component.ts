
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ApiServicesService } from './../../services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-TodoTable',
  standalone: true,
  imports:[
    NgFor,
    NgForOf,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './TodoTable.component.html',
  styleUrls: ['./TodoTable.component.css'],
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'Title', 'description', 'is_complete'];
  data : any[]= []
  constructor(private _ApiServicesService: ApiServicesService
  ) {
    this.getTodoList()  }

  ngOnInit() {




  }
  searchTodo(event:any){
    console.log(event.target.value)
    const param = event.target.value
    this._ApiServicesService.searchTodo(param)
    .subscribe
    ((x: any) =>
    {console.log(x)})
  }
  getTodoList(): void {
    this._ApiServicesService.getTodoList()
      .subscribe((x: any) => {
        this.data = x;
        console.log(this.data)
      });
  }
  deleteTodo(id: string): void {
    console.log(id)
    if(id){
      this._ApiServicesService.DeleteTodo(id)
    }
  }
}
