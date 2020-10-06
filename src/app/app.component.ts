import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproj';
  value = 'Welcome to Guru092' ;
  sizerDefaultSize = 17;
  // tslint:disable-next-line: typedef
  sizeHandler($event){
    alert($event);
  }
}
