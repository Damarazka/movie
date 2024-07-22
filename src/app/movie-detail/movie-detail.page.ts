import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movieId: number | undefined;
  movie: any;
  cast: any[] = []
  crew: any[] = []

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

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
        this.cast = response.credits.cast;
        this.crew = response.credits.crew;
      }, error => {
        console.error('Failed to load movie details:', error);
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
