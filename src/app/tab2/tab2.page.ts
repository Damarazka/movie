import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  query: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.query.trim().length === 0) {
      this.movies = [];
      return;
    }

    this.movieService.searchMovies(this.query).subscribe((response: any) => {
      console.log('API Response:', response);
      this.movies = response.results; 
    }, (error) => {
      console.error('API Error:', error);
    });
  }
}
