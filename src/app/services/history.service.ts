import { CSP_NONCE, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private _storage: Storage | null = null

  constructor(private storage: Storage) {
    this.init()
  }

  async init(){
    const storage = await this.storage.create()
    this._storage = storage
  }

  async saveToHistory(movie: any){
    let history = await this.getHistory()
    history = history.filter((item: any) => item.id !== movie.id)
    history.unshift(movie)
    if (history.length > 10) {
      history.pop()
    }
    this._storage?.set('history',history)
  }

  async getHistory(){
    const history = await this._storage?.get('history')
    return history || []
  }
}
