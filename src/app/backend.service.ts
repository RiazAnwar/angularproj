import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { MoviesResponse, Person } from './person/Person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpObj: HttpClient) { }
  getPersons(): Observable < Array<Person>>{
    const pern: Person [] = [];
    pern.push(new Person(1, 'Bhai Waleed' , 23));
    pern.push(new Person(2, 'Bhai Asad' , 18));
    pern.push(new Person(3, 'Bhai Suhaib' , 24));
    return of(pern);
  }

//   validateUser(username: string , password: string): Observable<boolean>{
//     // tslint:disable-next-line: triple-equals
//     if (username == 'admin' && password == 'admin' ){
//       return of(true);
//     }
//     else{
//     return of(false);
//   }
//  }

validateUser(username: string , password: string): Observable<boolean>{
 const u = 'http://localhost:5000/api/auth/login';
 this.httpObj.post<any> (u, {Login: username, Password : password}).subscribe(m => console.log(m));
 return of(true);
}


getMovies(term: string): Observable<MoviesResponse>{
  let apiUrl = "http://www.omdbapi.com/?apikey=b2b65064&s=" + term;
  return this.httpObj.get<MoviesResponse>(apiUrl);
}
}
