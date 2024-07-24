import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookmarkPage } from './bookmark.page';

describe('BookmarkPage', () => {
  let component: BookmarkPage;
  let fixture: ComponentFixture<BookmarkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
