import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AdminService } from 'src/app/services/admin.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.scss']
})
export class ShowMembersComponent {
 responseMessage: any
  member: any


   constructor(
    private adminService: AdminService,
    private ngxService: NgxUiLoaderService,
      private snackbarService: SnackbarService,
    private router: Router,
  ) {
      this.ngxService.start()
      this.getUsers()
   }

  getUsers() {
    this.adminService.getMembers().subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.member = response
      },
      (error: any) => {
        this.ngxService.stop()
        console.log(error)
        if (error.error?.message) {
          this.responseMessage = error.error?.message
        } else {
          this.responseMessage = GlobalConstants.genericError
        }
        this.snackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error,
        )
      },
    )
   }
}
