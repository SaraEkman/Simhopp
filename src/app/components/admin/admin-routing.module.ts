import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component'
import { ShowNewsComponent } from './news/show-news/show-news.component'
import { ShowMembersComponent } from './members/show-members/show-members.component'
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'show-news',
    component: ShowNewsComponent,
  },
  {
    path: 'show-members',
    component: ShowMembersComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
