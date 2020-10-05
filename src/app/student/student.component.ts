import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})




  export class StudentComponent implements OnInit {
    login1:string=" test1";
    login2:string=" test2";
    login3:string=" test3";

clickCounter: number = 0;

  //  value = 'Cursor is in Student Component';
  // constructor() {  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  onSaveClick($event)
  {
     // tslint:disable-next-line: no-debugger
     debugger;
     if ($event)
    {
      alert('' + $event.target.textContent);
    }
    else{
      alert('Button Clicked');
    }
     this.clickCounter++;
  }
  setText($event)
  {
    this.login1=$event.target.value;
  }
  show(x)
  {alert(x);}

}
