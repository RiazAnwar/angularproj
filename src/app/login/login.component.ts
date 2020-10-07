import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  constructor(public login: BackendService, private router: Router) {}

  ngOnInit(): void {

  }
  // tslint:disable-next-line: typedef
  onLoginClicked(){
    this.login.validateUser(this.username, this.password).subscribe(
    m => {
      if (m) {
        this.router.navigate(['/home']);
        // this.message = 'Valid User';
      }
      else {
         this.message = 'Invalid User';
      }
    });
  }

  // onLoginClicked(){
  //   var result=this.login.validateUser(this.username, this.password)
  //   if(result) {
  //    this.message = 'Valid User';
  //   }
  //   else
  //   {
  //     this.message = 'Invalid User';
  //   }
  // }

  // onLoginClicked(){
  //   if (this.username == "admin" && this.password == "admin"){
  //     this.message = 'Valid User';
  //   }
  //   else{
  //     this.message = 'Invalid User';
  //   }
  // }

  // tslint:disable-next-line: typedef
  clear() {
    this.username = '';
    this.password = '';
    this.message = '';
  }


}
