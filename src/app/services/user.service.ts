import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../modules/User'
import { GlobalConstants } from '../shared/global-constants'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  signup(data: User) {
    return this.httpClient.post(`${GlobalConstants.url}/users/signup`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  forgotPassword(data: User) {
    return this.httpClient.post(`${GlobalConstants.url}/users/forgotPassword`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  login(data: any) {
    return this.httpClient.post(`${GlobalConstants.url}/users/login`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

  checkToken() {
    return this.httpClient.get(`${GlobalConstants.url}/users/checkToken`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }

}
