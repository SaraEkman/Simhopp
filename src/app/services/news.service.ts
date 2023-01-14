import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`${GlobalConstants.url}/news/get`);
  }

  getNewsById(id: any) {
    return this.httpClient.get(`${GlobalConstants.url}/news/get/${id}`);
  }

  addNews(data: any) {
    return this.httpClient.post(`${GlobalConstants.url}/news/add`, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
  }
}
