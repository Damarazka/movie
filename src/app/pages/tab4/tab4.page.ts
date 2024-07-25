import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  user: any = {
    name: 'Damarazks Akhyari',
    email: 'example123@mail.com',
    phone: '123-456-7890',
    instagram: 'ahoha_',
    address: '123 Main St, Anytown, USA'
  }

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToBookmark(){
    this.router.navigateByUrl('/bookmark')
  }

  goToHistory(){
    this.router.navigateByUrl('/history')
  }
}
