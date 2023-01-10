import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from './../../services/user.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { MatDialogRef } from '@angular/material/dialog'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { Observable } from 'rxjs'
import { User } from './../../modules/User';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signupForm: any = FormGroup
  responseMessage: any
  isValid: boolean = true

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

  asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  return new Observable(observer => {
    // Do async validation here
    if (this.isValid) {
      observer.next(null);
    } else {
      observer.next({ 'asyncError': true });
    }
    observer.complete();
  });
}

  handleSubmit() {
    this.ngxService.start()
    var formaData = this.signupForm.value
    var data: User = new User(0, formaData.userName, formaData.userEmail, formaData.password)
    console.log(data);
    this.UserService.signup(data).subscribe(
      (res: any) => {
        this.ngxService.stop()
        this.dialogRef.close()
        this.responseMessage = res?.message
        this.snackbarService.openSnackBar(this.responseMessage, '')
        this.router.navigate(['/'])
      },
      (error) => {
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
