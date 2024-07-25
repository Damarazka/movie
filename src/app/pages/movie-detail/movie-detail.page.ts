import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { HistoryService } from 'src/app/services/history.service';




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
  isBookmarked = false

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router, private bookmarkService : BookmarkService, private historyService: HistoryService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if (id) {
        this.movieId = +id;
        this.loadMovieDetails();
        this.isBookmarked = (await this.bookmarkService.getBookmarks()).includes(this.movieId);
      }
    });
  }

  loadMovieDetails() {
    if (this.movieId !== undefined) {
      this.movieService.getMovieDetails(this.movieId).subscribe(response => {
        this.movie = response;
        this.cast = response.credits.cast;
        this.crew = response.credits.crew;
        this.saveToHistory(this.movie)
      }, error => {
        console.error('Failed to load movie details:', error);
      });
    }
  }

  async saveToHistory(movie: any){
    await this.historyService.saveToHistory(movie)
  }

  async toggleBookmark() {
    if (this.isBookmarked) {
      await this.bookmarkService.removeBookmark(this.movieId!);
    } else {
      await this.bookmarkService.addBookmark(this.movieId!);
    }
    this.isBookmarked = !this.isBookmarked;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
