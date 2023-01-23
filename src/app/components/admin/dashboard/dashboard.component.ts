import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/services/admin.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

    constructor(
    private adminService: AdminService,
    private ngxService: NgxUiLoaderService,
      private snackbarService: SnackbarService,
    private router: Router,
  ) {
     
    }


}
