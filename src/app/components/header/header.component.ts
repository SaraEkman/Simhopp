import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { SignInComponent } from '../sign-in/sign-in.component'
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component'
import { LogInComponent } from '../log-in/log-in.component'
import { ChangeUseremailComponent } from '../change-useremail/change-useremail.component'
import { Router } from '@angular/router'
import { ConfirmationComponent } from '../admin/confirmation/confirmation.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, private router: Router) {}
  CheckUserLogin: boolean = false
  CheckAdminLogin: boolean = false
  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.CheckAdminLogin = true
      this.CheckUserLogin = false
    } else if (localStorage.getItem('userEmail') != null) {
      this.CheckUserLogin = true
      this.CheckAdminLogin = false
    } else {
      this.CheckUserLogin = false
      this.CheckAdminLogin = false
    }

  }

  signUpAction() {
    console.log('signupAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px'
    this.dialog.open(SignInComponent, dialogConfig)
  }

  logInAction() {
    console.log('logInAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px'
    this.dialog.open(LogInComponent, dialogConfig)
  }

  forgotPasswordAction() {
    console.log('forgotPasswordAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px'
    this.dialog.open(ForgotPasswordComponent, dialogConfig)
  }
  changeUserEmailAction() {
    console.log('changeUserEmailAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px'
    this.dialog.open(ChangeUseremailComponent, dialogConfig)
  }

  loggOutAction() {
    console.log('loggOutAction')
    localStorage.clear()
    this.CheckUserLogin = false
    this.CheckAdminLogin = false
  }

  adminDashboardAction() {
    console.log('adminDashboardAction')
    this.router.navigate(['/dashboard'])
  }
}
