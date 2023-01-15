import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { GlobalConstants } from './shared/global-constants'
import { RouteGuardService } from './services/route-guard.service'
import { ShowMembersComponent } from './components/admin/member/show-members/show-members.component'
import { EditMemberComponent } from './components/admin/member/edit-member/edit-member.component'
import { AddMemberComponent } from './components/admin/member/add-member/add-member.component'
import { DeleteMemberComponent } from './components/admin/member/delete-member/delete-member.component'
import { DashboardMemberComponent } from './components/dashboard-member/dashboard-member.component'
import { AllNewsComponent } from './components/admin/news/all-news/all-news.component'
import { LayoutComponent } from './components/layout/layout.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '',
  //       pathMatch: 'full',
  //     },
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         './material-component/material.module'.then(
  //           (m) => m.MaterialComponentsModule),
  //       canActivate: [RouteGuardService],
  //       data: { expectedRole: [GlobalConstants.user, GlobalConstants.admin] },
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         './dashboard/dashboard.module'.then((m) => m.DashboardModule),
  //       canActivate: [RouteGuardService],
  //       data: { expectedRole: [GlobalConstants.user, GlobalConstants.admin] },
  //     },
  //   ],
  // },

  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: [GlobalConstants.user, GlobalConstants.admin] },

  },


  {
    path: 'dashboardMember',
    component: DashboardMemberComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: [GlobalConstants.admin] },
    children: [
      {
        path: 'showMembers',
        component: ShowMembersComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] },
      },
      {
        path: 'editMember',
        component: EditMemberComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] },
      },
      {
        path: 'addMember',
        component: AddMemberComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] },
      },
      {
        path: 'deleteMember',
        component: DeleteMemberComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] },
      },
    ],
  },

  {
    path: 'dashboardNews',
    component: DashboardMemberComponent,
    canActivate: [RouteGuardService],
    data: { expectedRole: [GlobalConstants.admin] },
    children: [
      {
        path: 'showNews',
        component: AllNewsComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] }
      },
      {
        path: 'editNews',
        component: EditMemberComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] }
      },
      {
        path: 'addNews',
        component: AddMemberComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] }
      },
      {
        path: 'deleteNews',
        component: DeleteMemberComponent,
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.admin] }
      },
    ]
  },

  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
