import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message:string;
  constructor(public login:BackendService) { }

  ngOnInit(): void {

  }
  onLoginClicked(){
    var result=this.login.validateUser(this.username, this.password)
    if(result) {
     this.message = 'Valid User';
    } 
    else
    {
      this.message = 'Invalid User';
    }

  }
  // onLoginClicked(){
  //   if (this.username == "admin" && this.password == "admin"){
  //     this.message = 'Valid User';
  //   }
  //   else{
  //     this.message = 'Invalid User';
  //   }
  // }
  
  clear() {
    this.username = '';
    this.password = '';
    this.message = '';
  }


}
