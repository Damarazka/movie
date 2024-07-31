import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string
  password!: string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async login(){
    const {value} = await Preferences.get({key: this.username})
    const user = value ? JSON.parse(value): null

    if (user && user.password === this.password) {
      alert('login sukses')
      this.router.navigateByUrl('/tabs/tab1')
    }else{
      alert('invalid credential')
    }
  }

}
