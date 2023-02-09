import { Component, EventEmitter, Inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { AngularEditorConfig } from '@kolkov/angular-editor'
import { HttpClient } from '@angular/common/http'
import { SanitizeHtmlPipe } from '../manage-news/sanitize-html.pipe'

@Component({
  selector: 'app-manage-news',
  templateUrl: './manage-news.component.html',
  styleUrls: ['./manage-news.component.scss'],
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
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize'],
      ['insertImage', 'insertVideo'],
    ],
  }

  selectedFile: File = null as any
  imageUrl: any = ''
  empty = false

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0]

    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event2) => {
      this.imageUrl = reader.result
    }
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    public dialogRef: MatDialogRef<ManageNewsComponent>,
    private snackbarService: SnackbarService,
    private http: HttpClient,
    private sanitizeHtml: SanitizeHtmlPipe,

  ) {
    this.userId = localStorage.getItem('userId')
  }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      content: ['', Validators.required],
      image: ['', Validators.required],
    })

    if (this.dialogData.action == 'Edit') {
      this.dialogAction = 'Edit'
      this.action = 'Update'
      this.newsForm.patchValue({
        content: this.dialogData.data.content,
      })
      this.imageUrl = this.dialogData.data.image
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
    const uploadData = new FormData()
    uploadData.append('image', this.selectedFile)
    this.http
      .post(`${GlobalConstants.url}/uploads`, uploadData)
      .subscribe((res: any) => {
        var dataNews = {
          content: formData.content,
          userId: this.userId,
          image: res.filename,
        }
        if (res) {
          this.adminService.addNews(dataNews).subscribe(
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
      })
  }

  edit() {
    var formData = this.newsForm.value
    const uploadData = new FormData()
    uploadData.append('image', this.selectedFile)
    this.http
      .post(`${GlobalConstants.url}/uploads`, uploadData)
      .subscribe((res: any) => {
        var data = {
          id: this.dialogData.data.id,
          content: formData.content,
          userId: Number(this.userId),
          image: res.filename,
        }
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
      })
  }
}
