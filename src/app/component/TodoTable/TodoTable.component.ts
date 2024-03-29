
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ApiServicesService } from './../../services/api-services.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Todo } from '../../models/todo';
import { ModalService } from '../../services/modal.service';
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
    MatIconModule,
  ],
  templateUrl: './TodoTable.component.html',
  styleUrls: ['./TodoTable.component.css'],
})
export class TodoTableComponent implements OnInit {
deleteCN : any;
sendcheckCN :any
checkCreate: boolean = false;
  displayedColumns: string[] = ['date', 'Title', 'description', 'is_complete'];
  data : any[]= []
  model : Todo = new Todo({
    id: '',
    title: '',
    description:'',
    is_complete: false,
  })
  constructor(
    private _ApiServicesService: ApiServicesService,
    private modalService: ModalService
  ) {
    this.getTodoList()  }

  ngOnInit() {




  }
  searchTodo(event:any){
    console.log(event.target.value)
    const param = event.target.value
    this._ApiServicesService.search(param)
    .subscribe
    ((x: any) =>
    {
      this.data = x
      console.log(x)
    })
  }
  getTodoList(): void {
    this._ApiServicesService.get()
      .subscribe((x: any) => {
        this.data = x;
        console.log(this.data)
      });
  }
  elementVisible: boolean = true;
  create(): void{
    console.log(this.model)
    this._ApiServicesService.create(this.model).subscribe( ()=>{
         this.closeModal()
        this.getTodoList();
    })
  }
  deleteTodo(id: string): void {
      this._ApiServicesService.Delete(id).subscribe(response => {
      console.log('Todo deleted:', response);
      this.getTodoList()
    });

  }
  Status(id:string, status: boolean): void{
    this._ApiServicesService.updateTaskStatus(id, status).subscribe(()=>{
      console.log('change good')
    })

  }
  closeModal(): void{
    this.elementVisible = false
  }
}
