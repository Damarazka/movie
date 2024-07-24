import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  trendingMovies: any[] = []
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getTrendingMovies()
  }

  getTrendingMovies() {
    this.movieService.getTrendingMovies().subscribe((response: any) => {
      console.log('Trending Movies:', response);
      this.trendingMovies = response.results;
    }, (error) => {
      console.error('API Error:', error);
    });
  }
}
