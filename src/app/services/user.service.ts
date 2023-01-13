import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../modules/User'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) {}

  signup(data: User) {
    return this.httpClient.post(`${this.url}/users/signup`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  forgotPassword(data: User) {
    return this.httpClient.post(`${this.url}/users/forgotPassword`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  login(data: any) {
    return this.httpClient.post(`${this.url}/users/login`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
}
