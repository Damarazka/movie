import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { lastValueFrom, timeout } from 'rxjs';
import { UserModel } from '../pages/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = {};

  constructor(private httpClient: HttpClient) {

  }

  getToken() {
    const userData = JSON.parse(localStorage.getItem('userData')!);

    this.headers = {
      'Authorization': `Bearer ${userData.token}`
      // 'Authorization': 'Bearer ' + userData.token;
    }

    return this.headers;
  }

  getUserData() {
    const response = JSON.parse(localStorage.getItem('userData')!);
    const userData: UserModel = {
      id: response.user.id,
      email: response.user.email,
      username: response.user.username,
      token: response.token,
    }
    console.log(userData);
    
    return userData;
  }

  async get(url: string, headers = {}): Promise<any> {
    const request = this.httpClient
      .get(url, { observe: 'response', headers })
      .pipe(timeout(10000));

    return await lastValueFrom<any>(request);
  }

  async post(url: string, data: any, headers = {}): Promise<any> {
    const request = this.httpClient
      .post(url, data, { observe: 'response',headers })
      .pipe(timeout(10000));

    return await lastValueFrom<any>(request);
  }

  async put(url: string, data: any): Promise<any> {
    const request = this.httpClient
      .put(url, data, { observe: 'response' })
      .pipe(timeout(10000));

    return await lastValueFrom<any>(request);
  }

  async delete(url: string) {
    const request = this.httpClient
      .delete(url, { observe: 'response' })
      .pipe(timeout(10000));

    return await lastValueFrom<any>(request);
  }
}
