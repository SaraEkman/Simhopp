import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboardComponent } from 'src/app/components/adminUsers/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: 'usersDashboard',
    component: UsersDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule { }
