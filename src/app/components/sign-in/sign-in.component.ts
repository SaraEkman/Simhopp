import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from './../../services/user.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { MatDialogRef } from '@angular/material/dialog'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { User } from './../../modules/User';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent {
  signupForm: any = FormGroup
  responseMessage: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UserService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<SignInComponent>,
    private ngxService: NgxUiLoaderService,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: [
        null,
        [Validators.required,
        Validators.pattern(GlobalConstants.nameRegex)]
      ],
      userEmail: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]
      ],
      password: [null, [Validators.required, Validators.pattern(GlobalConstants.passwordRegex), Validators.minLength(8)]],
    })
  }


  handleSubmit() {
    this.ngxService.start()
    var formaData = this.signupForm.value
    console.log(formaData);
    var data: User = new User(formaData.userName, formaData.userEmail, formaData.password)
    console.log(data);
    this.UserService.signup(data).subscribe(
      (response: any) => {
        console.log(response);
        this.ngxService.stop();
        this.dialogRef.close();
        this.responseMessage = response?.message;
        this.snackbarService.openSnackBar(this.responseMessage, '');
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error);
        this.ngxService.stop()
        if (error.error?.message) {
          this.responseMessage = error?.error?.message
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
