import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { NewsService } from 'src/app/services/news.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { NgxUiLoaderService } from 'ngx-ui-loader'
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
    image: '',
    showMore: false,
  }
  token = localStorage.getItem('token')

  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: '15rem',
  //   minHeight: '5rem',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
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
    this.newsService.getNews(4).subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.getNewsForUser = response.map((el: INewsForUser, i: number) => {
          let date = new Date(el.createDate).toISOString().slice(0, 10)
          return {
            ...el,
            image: 'assets/uploads/' + el.image,
            createDate: date,
            showMore: false,
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

  trimString(text: any, length: number) {
    return text.length > length ? text.substring(0, length) + '...' : text
  }
}
