
import { Component, OnInit } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-homeGrid',
  templateUrl: './homeGrid.component.html',
  styleUrls: ['./homeGrid.component.css']
})
export class HomeGridComponent implements OnInit {
data : any[] =[]
  constructor(

  ) {
  }

  ngOnInit() {


  }
checkdata = () =>{ console.log(this.data)}
}
