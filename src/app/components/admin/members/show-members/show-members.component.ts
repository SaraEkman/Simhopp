import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { MatTableDataSource } from '@angular/material/table'
import { ManageMembersComponent } from '../manage-members/manage-members.component'

@Component({
  selector: 'app-show-members',
  templateUrl: './show-members.component.html',
  styleUrls: ['./show-members.component.scss'],
})
export class ShowMembersComponent {
  responseMessage: any
  member: any
  displayedColumns: string[] = [
    'id',
    'userName',
    'userEmail',
    'admin',
    'softDelete',
    'actions',
  ]
  dataSource: any
  constructor(
    private adminService: AdminService,
    private ngxService: NgxUiLoaderService,
    private snackbarService: SnackbarService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.ngxService.start()
    this.getUsers()
  }

  getUsers() {
    this.adminService.getMembers().subscribe(
      (response: any) => {
        console.log(response)
        this.ngxService.stop()
        this.member = response

        let usersList = response.map((el: any, i: number) => {
          //:TODO: fix this
          // let softDelete = el.softDelete ? true : false
          // let admin = el.admin ? true : false
          let softDelete = el.softDelete ? 'Yes' : 'No'
          let admin = el.admin ? 'Yes' : 'No'
          return {
            ...el,
            admin: admin,
            softDelete: softDelete,
          }
        })
        console.log('usersList', usersList)
        this.dataSource = new MatTableDataSource(usersList)
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
    const dialogRef = this.dialog.open(ManageMembersComponent, dialogConfig)
    this.router.events.subscribe((event) => {
      dialogRef.close()
    })
    const sub = dialogRef.componentInstance.onAddMember.subscribe((res: any) => {
      this.getUsers()
    })
    }

  editMemberAction(el: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      action: 'Edit',
      data: el,
    }
    dialogConfig.width = '850px'
    const dialogRef = this.dialog.open(ManageMembersComponent, dialogConfig)
    this.router.events.subscribe((event) => {
      dialogRef.close()
    })
    const sub = dialogRef.componentInstance.onEditMember.subscribe((res: any) => {
      this.getUsers()
    })
  }

  deleteMemberAction(e: any) {
    this.ngxService.start()
    console.log(e.id, e.softDelete)
    let softDelete;
    if (e.softDelete == 'Yes') {
       softDelete = e.softDelete = true
    } else if (e.softDelete == 'No') {
      softDelete = e.softDelete = false
    }
    let data = {
      id: e.id,
      softDelete: !softDelete,
    }
    console.log(data);
    this.adminService.deleteMember(data).subscribe(
      (response: any) => {
        this.ngxService.stop()
        this.responseMessage = response.message
        this.snackbarService.openSnackBar(this.responseMessage, '')
        this.getUsers()
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
