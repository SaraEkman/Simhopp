import { Component, EventEmitter, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { AngularEditorConfig } from '@kolkov/angular-editor'
@Component({
  selector: 'app-manage-members',
  templateUrl: './manage-members.component.html',
  styleUrls: ['./manage-members.component.scss'],
})
export class ManageMembersComponent {
  onAddMember = new EventEmitter()
  onEditMember = new EventEmitter()
  memberForm: any = FormGroup
  dialogAction: any = 'Add'
  action: any = 'Add'
  responseMessage: any
  userId: any
  roles = [
    { value: GlobalConstants.admin, viewValue: 'Admin' },
    { value: GlobalConstants.user, viewValue: 'Member' },
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    public dialogRef: MatDialogRef<ManageMembersComponent>,
    private snackbarService: SnackbarService,
  ) {
    this.userId = localStorage.getItem('userId')
  }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({
      userName: ['',  [Validators.required,
        Validators.pattern(GlobalConstants.nameRegex)]],
      userEmail: ['',[Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      admin: [''],
    })

    if (this.dialogData.action == 'Edit') {
      this.dialogAction = 'Edit'
      this.action = 'Update'
      this.memberForm.patchValue(this.dialogData.data)
    }
  }

    handleSubmit() {
    if (this.dialogAction === 'Edit') {
      this.edit()
    } else  {
      this.add()
    }
    }

  add() {
    var formData = this.memberForm.value
    // var data = { userName: formData.userName, : this.userId }
    console.log(formData);
    this.adminService.addMember(formData).subscribe(
      (response: any) => {
        this.dialogRef.close()
        this.onAddMember.emit()
        this.responseMessage = response.message
        this.snackbarService.openSnackBar(this.responseMessage, 'success')
      },
      (error: any) => {
        console.log(error)
        this.dialogRef.close()
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

  edit() {
    var formData = this.memberForm.value
    var data = {
      id: this.dialogData.data.id,
      admin: formData.admin,
    }
    console.log(data);
    this.adminService.updateMember(data).subscribe(
      (response: any) => {
        this.dialogRef.close()
        this.onEditMember.emit()
        this.responseMessage = response.message
        this.snackbarService.openSnackBar(this.responseMessage, 'success')
      },
      (error: any) => {
        console.log(error)
        this.dialogRef.close()
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
