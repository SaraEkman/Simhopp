import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { AuthService } from './../../../services/auth.service'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ConfirmationComponent } from '../confirmation/confirmation.component'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  isAdmin: boolean = false

  constructor(
    private adminService: AdminService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {
    this.isAdmin = this.authService.isAuthenticated()
    console.log(this.isAdmin)
  }

  handleLogOut() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      message: 'logga ut',
    }
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig)
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (res: any) => {
        dialogRef.close()
        localStorage.clear()
        this.router.navigate(['/'])
      },
    )
  }
}
