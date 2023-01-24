import { Component, EventEmitter, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent {
  onAddNews = new EventEmitter()
  onEditNews = new EventEmitter()
  newsForm: any = FormGroup
  dialogAction: any = 'Add'
  action: any = 'Add'
  responseMessage: any
  userId: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    public dialogRef: MatDialogRef<AddNewsComponent>,
    private snackbarService: SnackbarService,
  ) {
    this.userId = localStorage.getItem('userId')
  }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      content: ['', Validators.required],
    })

    if (this.dialogData.action == 'Edit') {
      this.dialogAction = 'Edit'
      this.action = 'Update'
      this.newsForm.patchValue(this.dialogData.data)
    }
  }

  handleSubmit() {
    if (this.dialogAction === 'Edit') {
      this.edit()
    } else {
      this.add()
    }
  }

  add() {
    var formData = this.newsForm.value
    var data = { content: formData.content, userId: this.userId }
    this.adminService.addNews(data).subscribe((response: any) => {
      this.dialogRef.close()
      this.onAddNews.emit()
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
        this.snackbarService.openSnackBar(this.responseMessage,  GlobalConstants.error)
      }
    )
  }

  edit() {
     var formData = this.newsForm.value
    var data = { id: this.dialogData.data.id,content: formData.content, userId: this.userId }
    this.adminService.updateNews(data).subscribe((response: any) => {
      this.dialogRef.close()
      this.onEditNews.emit()
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
        this.snackbarService.openSnackBar(this.responseMessage,  GlobalConstants.error)
      }
    )
  }
}
