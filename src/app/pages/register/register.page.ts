import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username!: string;
  email!: string;
  password!: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  async register() {
    const body = { username: this.username, email: this.email, password: this.password };
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post('http://93.127.199.17:8080/api/register', body, { headers, observe: 'response' })
      .subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          alert('Registration failed: ' + error.message);
        }
      });
  }
}
