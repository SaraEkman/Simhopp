import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/services/admin.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { AuthService } from './../../../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isAdmin: boolean = false;

    constructor(
    private adminService: AdminService,
    private ngxService: NgxUiLoaderService,
      private snackbarService: SnackbarService,
      private router: Router,
    private authService: AuthService
  ) {
      this.isAdmin = this.authService.isAuthenticated();
      console.log(this.isAdmin);
    }
}
