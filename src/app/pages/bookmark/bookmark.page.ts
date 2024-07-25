import { Component, OnInit } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  bookmarks: any[] = [];

  constructor(
    private bookmarkService: BookmarkService,
    private movieService: MovieService,
    private router : Router
  ) {}

  async ngOnInit() {
    const bookmarkIds = await this.bookmarkService.getBookmarks();
    this.bookmarks = await Promise.all(
      bookmarkIds.map((id: number) => this.movieService.getMovieDetails(id).toPromise())
    );
  }

  goBack() {
    this.router.navigate(['/tabs/tab4']);
  }
}
