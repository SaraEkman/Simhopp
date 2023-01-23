import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component'
// import { SidebarComponent } from './sidebar/sidebar.component'
import { ShowNewsComponent } from './show-news/show-news.component'
import { ShowMembersComponent } from './show-members/show-members.component'
import { SidebarComponent } from './sidebar/sidebar.component'
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent
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
