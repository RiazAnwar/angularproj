import { Component, OnInit } from '@angular/core';
import { Person } from '../person/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  per: Person [] = [];
  constructor() { }

  ngOnInit(): void {
    this.per.push(new Person(1, 'Bhai Waleed' , 23));
    this.per.push(new Person(2, 'Bhai Asad' , 18));
    this.per.push(new Person(3, 'Bhai Suhaib' , 24));
  }

}
