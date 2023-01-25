import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { MatTableDataSource } from '@angular/material/table'
import { ManageNewsComponent } from '../manage-news/manage-news.component'

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss'],
})
export class ShowNewsComponent {
  displayedColumns: string[] = [
    'id',
    'content',
    'userName',
    'createDate',
    "softDelete",
    'actions',
  ]
  responseMessage: any
  dataSource: any
  constructor(
    private adminService: AdminService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.ngxService.start()
    this.getNews()
    // console.log(this.dataSource)
  }

  getNews() {
    this.adminService.getNews().subscribe(
      (response: any) => {
        // console.log(response)
        this.ngxService.stop()
        let newsList = response.map((el: any, i: number) => {
          let date = new Date(el.createDate).toISOString().slice(0, 10)
          //:TODO: fix this to show yes or no
          let softDelete = el.softDelete ? true : false
          return {
            ...el,
            createDate: date,
            softDelete: softDelete,
          }
        })
        console.log('newsList', newsList)
        this.dataSource = new MatTableDataSource(newsList)
        console.log('this.dataSource', this.dataSource)
      },
      (error: any) => {
        this.ngxService.stop()
        console.log(error)
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

  applyFilter(event: Event) {
    // console.log(event)
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  handleAddAction() {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      action: 'Add',
    }
    dialogConfig.width = '850px'
    const dialogRef = this.dialog.open(ManageNewsComponent, dialogConfig)
    this.router.events.subscribe((event) => {
      dialogRef.close()
    })
    const sub = dialogRef.componentInstance.onAddNews.subscribe((res: any) => {
      this.getNews()
    })
  }

  editNewsAction(el: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      action: 'Edit',
      data: el,
    }
    dialogConfig.width = '850px'
    const dialogRef = this.dialog.open(ManageNewsComponent, dialogConfig)
    this.router.events.subscribe((event) => {
      dialogRef.close()
    })
    const sub = dialogRef.componentInstance.onEditNews.subscribe((res: any) => {
      this.getNews()
    })
  }

  deleteNewsAction(e: any) {
    this.ngxService.start()
    console.log(e.id, e.softDelete)
    let data = {
      id: e.id,
      softDelete: !e.softDelete,
    }

    this.adminService.deleteNews(data).subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.responseMessage = response.message
        this.snackbarService.openSnackBar(this.responseMessage, '')
        this.getNews()
      },
      (error: any) => {
        this.ngxService.stop()
        console.log(error)
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