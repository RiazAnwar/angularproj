import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {

  itemImageUrl: string = "./../../assets/img.jpg";
  testClasses:string = "here is string";
  applyTestClass: boolean = true;
  applyRedStyle: boolean = true;
  testObj:Object ={ID:1 ,Name:"Riaz Anwar", Age:24};
  isTrue:boolean =true;
  clickCounter: number =0;
 
  fontSizePx1:number = 16;
  fontSizePx2:number = 16;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  getColor()
  {
    return 'blue';
  }
}
