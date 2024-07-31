import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username!: string
  password!: string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async register(){
    const {value} = await Preferences.get({ key: this.username})
    if (value) {
      alert('username udah ada')
      return
    }

    await Preferences.set({
      key: this.username,
      value: JSON.stringify({username: this.username, password: this.password})
    })

    alert('Registration successful!');
    this.router.navigateByUrl('/login');
  }

}
