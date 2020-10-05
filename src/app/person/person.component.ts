import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  isCount:boolean=false;
  @Input() per: Person;
  @Output() counterEvent = new EventEmitter<number>();
  constructor() {
  // this.per = new Person(1 , 'riaz', 23);
  }

  ngOnInit(): void {
  }
  onCountClick() {
    this.isCount = true;
    this.counterEvent.emit(this.per.id);
  }
}
