import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private storage : Storage | null = null

  constructor(private storageService : Storage) { 
    this.init()
  }

  private async init(){
    this.storage = await this.storageService.create()
  }

  async addBookmark(id: number){
    const bookmarks = await this.storage?.get('bookmarks') || [];
    if (!bookmarks.includes(id)) {
      bookmarks.push(id);
      await this.storage?.set('bookmarks', bookmarks);
    }
  }

  async removeBookmark(id: number) {
    let bookmarks = await this.storage?.get('bookmarks') || [];
    bookmarks = bookmarks.filter((item: number) => item !== id);
    await this.storage?.set('bookmarks', bookmarks);
  }

  async getBookmarks() {
    return await this.storage?.get('bookmarks') || [];
  }
}
