import { Component, OnInit } from '@angular/core';
import { LocalDataServices } from '../../services/localData.ts.service';

@Component({
  selector: 'app-TodoTable',
  templateUrl: './TodoTable.component.html',
  styleUrls: ['./TodoTable.component.css']
})
export class TodoTableComponent implements OnInit {

  constructor(
    private LocalDataServices : LocalDataServices
  ) { }

  ngOnInit() {



  }
check = () =>{
console.log("click")
}
}
