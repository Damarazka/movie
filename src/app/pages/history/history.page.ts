import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history: any[] = []

  constructor(private historyService: HistoryService, private router: Router) { }

  ngOnInit() {
    this.loadHistory()
  }

  async loadHistory(){
    this.history = await this.historyService.getHistory()
  }

  goBack() {
    this.router.navigate(['/tabs/tab4']);
  }
}
