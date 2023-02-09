import { Component } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { AdminService } from 'src/app/services/admin.service'
import { SnackbarService } from 'src/app/services/snackbar.service'
import { GlobalConstants } from 'src/app/shared/global-constants'
import { MatTableDataSource } from '@angular/material/table'
import { ManageMembersComponent } from '../manage-members/manage-members.component'
import { ConfirmationComponent } from '../../confirmation/confirmation.component'

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
        this.ngxService.stop()
        this.member = response

        let usersList = response.map((el: any, i: number) => {
          let softDelete = el.softDelete ? 'Yes' : 'No'
          let admin = el.admin ? 'Yes' : 'No'
          return {
            ...el,
            admin: admin,
            softDelete: softDelete,
          }
        })
        this.dataSource = new MatTableDataSource(usersList)
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
    const sub = dialogRef.componentInstance.onAddMember.subscribe(
      (res: any) => {
        this.getUsers()
      },
    )
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
    const sub = dialogRef.componentInstance.onEditMember.subscribe(
      (res: any) => {
        this.getUsers()
      },
    )
  }

  deleteMemberAction(e: any) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = {
      message: 'delete ' + e.userName + ' member',
    }
    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig)
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (res: any) => {
        this.ngxService.start()
        this.deleteMember(e.id)
        dialogRef.close()
      },
    )
  }

  deleteMember(id: any) {
    console.log('deleteMember', id)
    this.adminService.deleteMember(id).subscribe(
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

  onChange(softDelete: any, id: any) {
    console.log('onChange')
    console.log(softDelete, id)

    this.ngxService.start()

    let softDeleteValue
    if (softDelete) {
      softDeleteValue = softDelete = true
    } else if (!softDelete) {
      softDeleteValue = softDelete = false
    }
    let data = {
      id: id,
      softDelete: softDeleteValue,
    }
    console.log(data)
    this.adminService.softDeleteMember(data).subscribe(
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
