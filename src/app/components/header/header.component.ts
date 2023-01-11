import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { SignInComponent } from '../sign-in/sign-in.component'
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  signupAction() {
    console.log('signupAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px'
    this.dialog.open(SignInComponent, dialogConfig)
  }

  logInAction() {
    console.log('logInAction')
  }

  forgotPasswordAction() {
    console.log('forgotPasswordAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '550px';
    this.dialog.open(ForgotPasswordComponent, dialogConfig)
  }
}
