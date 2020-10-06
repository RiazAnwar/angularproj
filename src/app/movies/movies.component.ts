import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MovieResponse, MoviesResponse } from '../person/Person';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  term:string = "batman";
  Movies: MovieResponse[] = [];
  constructor(private MoviesService: BackendService) { }

  ngOnInit(): void {
  //  this.MoviesService.getMovies("batman").subscribe(m => {console.log(m)});
}
// tslint:disable-next-line: typedef
searchMovies(){
  this.MoviesService.getMovies(this.term)
  .subscribe(
    m => {
      this.Movies = m.Search;
    });
  }
}
