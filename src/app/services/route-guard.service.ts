import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import jwt_decode from 'jwt-decode';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public auth: AuthService, public router: Router, private snackbarService: SnackbarService) {
  }
  canActivate(route: ActivatedRouteSnapshot): any {
    let expectedRoleArray:any = route.data;
    expectedRoleArray = expectedRoleArray.expectedRole;

    const token: any = localStorage.getItem('token');
    var tokenPayload: any;
    try {
      tokenPayload = jwt_decode(token);
    } catch (Error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }

    let checkRole = false
    for (let index = 0; index < expectedRoleArray.length; index++) {
      if (tokenPayload.role == expectedRoleArray[index]) {
        checkRole = true;
      }
    }

    if (tokenPayload.role == GlobalConstants.user || tokenPayload.role == GlobalConstants.admin) {
      if (checkRole) {
        if (this.auth.isAuthenticated() && checkRole) {
         return true;
        }
        this.snackbarService.openSnackBar(GlobalConstants.unauthorized, GlobalConstants.error);
        // TODO: Redirect to unauthorized page     it has '/dashboard' in the url?
        this.router.navigate(['/']);
        return false;
      } else {
        this.router.navigate(['/']);
        localStorage.clear();
        return false;
      }



    }

  }
}
