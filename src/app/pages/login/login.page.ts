import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  async login() {
    const body = { username: this.username, password: this.password };

    try {
      const response = await this.http.post('http://93.127.199.17:8080/api/login', body)

      console.log('Response Status:', response.status); 
      console.log('Response Body:', response.body); 

      if (response.status !== 200) {
        throw response
      }

      localStorage.setItem('userData', JSON.stringify(response.body.data));
      alert('Login successful!');
      this.router.navigateByUrl('/tabs/tab1');

    } catch (error: any) {
      console.error('Login Error:', error);
      alert('Login failed: ' + error.message);
    }
  }
}
