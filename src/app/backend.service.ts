import { Injectable } from '@angular/core';
import { Person } from './person/Person';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getPersons(): Array<Person>{
    const pern: Person [] = [];
    pern.push(new Person(1, 'Bhai Waleed' , 23));
    pern.push(new Person(2, 'Bhai Asad' , 18));
    pern.push(new Person(3, 'Bhai Suhaib' , 24));
    return pern;
  }
  validateUser(username:string, password:string):boolean{
    if (username == "admin" && password == "admin"){
      return true;
    }
    else
    return false;
}
}