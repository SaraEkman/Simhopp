import { Component } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from './../../services/user.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: any = FormGroup
  responseMessage: any

  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.FormBuilder.group({
      userEmail: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
    })
  }

  handleSubmit() {
    this.ngxService.start()
    var formData = this.forgotPasswordForm.value
    this.UserService.forgotPassword(formData).subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.responseMessage = response?.message
        this.dialogRef.close()
        this.snackbarService.openSnackBar(this.responseMessage, '')
      },
      (error) => {
        console.log(error);
        this.ngxService.stop()
        if (error?.error?.message) {
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
