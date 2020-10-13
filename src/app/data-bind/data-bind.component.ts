import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  x:string ="Umair";
  
  itemImageUrl: string = "./../../assets/img.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
