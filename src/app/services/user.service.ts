import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) {}

  signup(data: any) {
    return this.httpClient.post(`${this.url}/users/signup`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
}
