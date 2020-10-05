import { Component, Input, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() per: Person;
  constructor() {
  //this.per = new Person(1 , 'riaz', 23);
  }

  ngOnInit(): void {
  }

}
