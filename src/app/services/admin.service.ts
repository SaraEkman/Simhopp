import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from '../shared/global-constants'

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private HttpClient: HttpClient) { }

  getMembers() {
    return this.HttpClient.get(`${GlobalConstants.url}/users/get`)
  }




  getNews() {
    return this.HttpClient.get(`${GlobalConstants.url}/news/get`)
  }
}
