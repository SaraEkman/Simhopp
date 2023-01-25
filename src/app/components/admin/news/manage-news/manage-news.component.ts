import { Component, EventEmitter, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { AngularEditorConfig } from '@kolkov/angular-editor'
// import { DomSanitizer } from '@angular/platform-browser';
import { SanitizeHtmlPipe } from '../manage-news/sanitize-html.pipe';

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.scss']
})
export class ManageNewsComponent {
 onAddNews = new EventEmitter()
  onEditNews = new EventEmitter()
  newsForm: any = FormGroup
  dialogAction: any = 'Add'
  action: any = 'Add'
  responseMessage: any
  userId: any
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    public dialogRef: MatDialogRef<ManageNewsComponent>,
    private snackbarService: SnackbarService,
    private sanitizeHtml: SanitizeHtmlPipe
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
    } else  {
      this.add()
    }
  }

  add() {
    var formData = this.newsForm.value
    var data = { content: formData.content, userId: this.userId }
    console.log(data);
    this.adminService.addNews(data).subscribe(
      (response: any) => {
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
        this.snackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error,
        )
      },
    )
  }

  edit() {
    var formData = this.newsForm.value
    var data = {
      id: this.dialogData.data.id,
      content: formData.content,
      userId: Number(this.userId),
    }
    console.log(data);
    this.adminService.updateNews(data).subscribe(
      (response: any) => {
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
        this.snackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error,
        )
      },
    )
  }

  delete() {
    var data = { id: this.dialogData.data.id, userId: this.userId }
    console.log(data);
    // this.adminService.deleteNews(data).subscribe(
    //   (response: any) => {
    //     this.dialogRef.close()
    //     this.onDeleteNews.emit()
    //     this.responseMessage = response.message
    //     this.snackbarService.openSnackBar(this.responseMessage, 'success')
    //   },
    //   (error: any) => {
    //     console.log(error)
    //     this.dialogRef.close()
    //     if (error.error?.message) {
    //       this.responseMessage = error.error?.message
    //     } else {
    //       this.responseMessage = GlobalConstants.genericError
    //     }
    //     this.snackbarService.openSnackBar(
    //       this.responseMessage,
    //       GlobalConstants.error,
    //     )
    //   },
    // )
  }
}
