import { Component } from '@angular/core'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from './../../services/user.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { GlobalConstants } from 'src/app/shared/global-constants'

@Component({
  selector: 'app-change-useremail',
  templateUrl: './change-useremail.component.html',
  styleUrls: ['./change-useremail.component.scss'],
})
export class ChangeUseremailComponent {
  changeUserEmailForm: any = FormGroup
  responseMessage: any

  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService,
    private dialogRef: MatDialogRef<ChangeUseremailComponent>,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.changeUserEmailForm = this.FormBuilder.group({
      newUserEmail: [
        '',
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]],
    })
  }

  handleSubmit() {
    this.ngxService.start()
    var formData = this.changeUserEmailForm.value
    let data = {
      "id": localStorage.getItem('userId'),
      "userEmail": localStorage.getItem('userEmail'),
      "newUserEmail": formData.newUserEmail,
      "password": formData.password
    }
    this.UserService.changeUserEmail(data).subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.responseMessage = response?.message
        this.dialogRef.close()
        this.snackbarService.openSnackBar(this.responseMessage, '')
        localStorage.clear()
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
