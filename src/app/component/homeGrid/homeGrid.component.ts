import { LocalDataServices } from './../../services/localData.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeGrid',
  templateUrl: './homeGrid.component.html',
  styleUrls: ['./homeGrid.component.css']
})
export class HomeGridComponent implements OnInit {
data : any[] =[]
  constructor(
    private LocalDataServices: LocalDataServices
  ) {
this.data = this.LocalDataServices.data2
  }

  ngOnInit() {

  }
checkdata = () =>{ console.log(this.data)}
}
