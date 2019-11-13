import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../shared/models/movie';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  movies:Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.TopGrossing().subscribe(
      m => this.movies = m);
  }

}
