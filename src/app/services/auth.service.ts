import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(): any {
    const token = localStorage.getItem('token');
    if (!token) {
     this.router.navigate(['/']);
   }else{
     return true;
   }
  }
}
