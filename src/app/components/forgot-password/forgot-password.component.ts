import { Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { UserService } from './../../services/user.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { SnackbarService } from 'src/app/services/snackbar.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  ForgotPasswordForm: any = FormGroup
  responseMessage: any

  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {}
}
