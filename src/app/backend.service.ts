import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person/Person';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getPersons(): Observable < Array<Person>>{
    const pern: Person [] = [];
    pern.push(new Person(1, 'Bhai Waleed' , 23));
    pern.push(new Person(2, 'Bhai Asad' , 18));
    pern.push(new Person(3, 'Bhai Suhaib' , 24));
    return of(pern);
  }
  validateUser(username: string , password: string): Observable<boolean>{
    // tslint:disable-next-line: triple-equals
    if (username == 'admin' && password == "admin" ){
      return of(true);
    }
    else{
    return of(false);
  }
 } }
