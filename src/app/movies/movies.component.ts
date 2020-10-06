import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 // Movies: Object[] = [];
  constructor(private MoviesService: BackendService) { }

  ngOnInit(): void {
 //   this.MoviesService.getMovies("superman").subscribe(m => {this.Movies = m.Search;});
    this.MoviesService.getMovies("batman").subscribe(m => {console.log(m)});
}

}
