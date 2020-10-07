import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { TestClass } from '../person/Person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Service ko is trha sy hm inject krwa skty han
  constructor(@Inject('MyToken') private v, @Inject('MyTest') private v2)
  {
   // alert(v);
   // alert(v2.age);
   }

  //  constructor(@Inject('MyToken') private v,@Inject('MyTest') private v2:TestClass)
  //  {
  //    alert(v);
  //    alert(v2.age);
  //   }

  ngOnInit(): void {
  }

}
