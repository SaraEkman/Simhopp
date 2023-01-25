import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GlobalConstants } from '../shared/global-constants'

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private HttpClient: HttpClient) {}

  getMembers() {
    return this.HttpClient.get(`${GlobalConstants.url}/users/get`)
  }

  getNews() {
    return this.HttpClient.get(`${GlobalConstants.url}/news/get`)
  }

  addNews(data: any) {
    return this.HttpClient.post(`${GlobalConstants.url}/news/add`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
  updateNews(data: any) {
    return this.HttpClient.patch(`${GlobalConstants.url}/news/update`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
  deleteNews(data: any) {
    return this.HttpClient.patch(
      `${GlobalConstants.url}/news/delete`,data,{
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      },
    )
  }
}
