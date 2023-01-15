import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.userService.checkToken().subscribe(
        (response: any) => {
          console.log(response)
          this.router.navigate(['/dashboardMember'])
        },
        (error) => {
          console.log(error)
        },
      )
    }
  }
}
