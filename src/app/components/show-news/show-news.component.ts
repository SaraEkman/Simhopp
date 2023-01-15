import { Component } from '@angular/core'
import { AngularEditorConfig } from '@kolkov/angular-editor'
import { Router } from '@angular/router'
import { NewsService } from 'src/app/services/news.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { INewsForUser } from 'src/app/modules/news/INewsForUser'

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss'],
})
export class ShowNewsComponent {
  htmlContent: string = ''
  contentForm: any = FormGroup
  responseMessage: any
  getNewsForUser: INewsForUser[] = []
  getFirstNewsForUser: INewsForUser = {
    id: 0,
    content: '',
    createDate: new Date(),
  }
  token = localStorage.getItem('token')

  innerFirstContent = document.getElementById('first-content')

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

  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   maxHeight: 'auto',
  //   width: 'auto',
  //   minWidth: '0',
  //   translate: 'yes',
  //   enableToolbar: true,
  //   showToolbar: true,
  //   placeholder: 'Enter text here...',
  //   defaultParagraphSeparator: '',
  //   defaultFontName: '',
  //   defaultFontSize: '',
  //   fonts: [
  //     { class: 'arial', name: 'Arial' },
  //     { class: 'times-new-roman', name: 'Times New Roman' },
  //     { class: 'calibri', name: 'Calibri' },
  //     { class: 'comic-sans-ms', name: 'Comic Sans MS' },
  //   ],
  //   customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText',
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   uploadUrl: 'v1/image',
  //   // upload: (file: File) => { ... },
  //   uploadWithCredentials: false,
  //   sanitize: true,
  //   toolbarPosition:'top',
  //   toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  // }

  constructor(
    private router: Router,
    private newsService: NewsService,
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private ngxService: NgxUiLoaderService,
  ) {}

  ngOnInit(): void {
    this.contentForm = this.formBuilder.group({
      content: [''],
    })
    this.ngxService.start()
    this.newsService.getNews().subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.getNewsForUser = response.map((el: INewsForUser, i: number) => {
          let date = new Date(el.createDate).toISOString().slice(0, 10)
          return {
            ...el,
            createDate: date,
          }
        })

        this.getFirstNewsForUser = this.getNewsForUser[0]
        this.getNewsForUser = this.getNewsForUser.slice(1)
        console.log('NEWS', this.getNewsForUser[0].content)
      },
      (error) => {
        this.ngxService.stop()
        this.snackbarService.openSnackBar(error?.error?.message, '')
      },
    )
  }

  addNews() {
    this.ngxService.start()
    let data = {
      content: this.contentForm.value.content,
      userId: localStorage.getItem('userId'),
    }
    console.log(data)
    this.newsService.addNews(data).subscribe(
      (response: any) => {
        console.log(response)
        this.ngxService.stop()
        this.responseMessage = response?.message
        this.snackbarService.openSnackBar(this.responseMessage, '')
        this.router.navigate(['/'])
      },
      (error) => {
        console.log(error)
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

