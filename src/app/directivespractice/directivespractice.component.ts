import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivespractice',
  templateUrl: './directivespractice.component.html',
  styleUrls: ['./directivespractice.component.css']
})
export class DirectivespracticeComponent implements OnInit {
  
  testObj = {id:6, name :"testing", price:100};
  selectedCountry :string ="0";
  persons=[{id:1,name:'Arsal'},{id:2, name:'Arslan'},{id:3,name:'Arsool'}];

  constructor() { }

  ngOnInit(): void {
  }
  changeCountry(v){
    this.selectedCountry = v.target.value;
  }
  getColor():string{
    if(this.testObj.id >5)
    return "green";
    else
    return "grey";
  }
  getColorObj():Object{
    if(this.testObj.id>5)
    return {'background-color' : 'red','color' :'blue'};
    else
    return {'background-color': 'yellow'};
  }
  textColor()
  {
    return{'color':'orange'};
  }

}
