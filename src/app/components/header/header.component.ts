import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { SignInComponent } from '../sign-in/sign-in.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}

  logInAction() {
    console.log('logInAction')
  }
  signupAction() {
    console.log('signupAction')
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '500px'
    this.dialog.open(SignInComponent, dialogConfig)
  }
}
