import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { SignInComponent } from '../sign-in/sign-in.component'
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component'
import { LogInComponent } from '../log-in/log-in.component'
import { ChangeUseremailComponent } from '../change-useremail/change-useremail.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

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
    dialogConfig.width = '550px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig)
  }
  changeUserEmailAction() {
    console.log('changeUserEmailAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px';
    this.dialog.open(ChangeUseremailComponent, dialogConfig)
  }
}
