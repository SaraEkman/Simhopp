import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { UserService } from './../../services/user.service'
import { Router } from '@angular/router'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { MatDialogRef } from '@angular/material/dialog'
import { NgxUiLoaderService } from 'ngx-ui-loader'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UserService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<LogInComponent>,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {}
}
