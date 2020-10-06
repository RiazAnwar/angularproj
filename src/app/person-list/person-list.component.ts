import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Person } from '../person/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  per: Person [] = [];
  // selectedPersons = number =0;
  selectedPersons = 0;
  constructor(public backend: BackendService) { }

  // ngOnInit(): void {
  //  this.per=this.backend.getPersons();
  // }
  ngOnInit(): void{
    this.backend.getPersons().subscribe(
      m => {
        this.per = m;
      }
    );
  }

  // tslint:disable-next-line: typedef
  personCountHandle($event){
    this.selectedPersons++;
    // alert('Hello '+$event);
  }
}
