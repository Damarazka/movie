import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movieId: number | undefined;
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.movieId = +id;
        this.loadMovieDetails();
      }
    });
  }

  loadMovieDetails() {
    if (this.movieId !== undefined) {
      this.movieService.getMovieDetails(this.movieId).subscribe(response => {
        this.movie = response;
      }, error => {
        console.error('Failed to load movie details:', error);
      });
    }
  }
}
