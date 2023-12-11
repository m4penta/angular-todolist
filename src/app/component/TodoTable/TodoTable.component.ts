import { ApiServicesService } from './../../services/api-services.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-TodoTable',
  templateUrl: './TodoTable.component.html',
  styleUrls: ['./TodoTable.component.css']
})
export class TodoTableComponent implements OnInit {
data : any[] = []
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
}
