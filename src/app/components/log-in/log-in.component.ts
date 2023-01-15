import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { GlobalConstants } from 'src/app/shared/global-constants'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  loginForm: any = FormGroup
  responseMessage: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UserService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<LogInComponent>,
    private ngxService: NgxUiLoaderService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: [
        '',
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(GlobalConstants.passwordRegex),
          Validators.minLength(6),
        ],
      ],
    })
  }

  handleSubmit() {
    this.ngxService.start()
    var formaData = this.loginForm.value
    console.log(formaData)
    this.UserService.login(formaData).subscribe(
      (response: any) => {
        console.log(response)
        this.ngxService.stop()
        this.dialogRef.close()
        localStorage.setItem('token', response.accessToken)
        localStorage.setItem('userId', response.userId)
        // this.router.navigate(['/dashboardMember'])
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.ngxService.stop()
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
