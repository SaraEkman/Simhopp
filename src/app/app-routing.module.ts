import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { GlobalConstants } from './shared/global-constants'
import { RouteGuardService } from './services/route-guard.service'
import { ShowMembersComponent } from './components/admin/show-members/show-members.component'
import { EditMemberComponent } from './components/admin/edit-member/edit-member.component'
import { AddMemberComponent } from './components/admin/add-member/add-member.component'
import { DeleteMemberComponent } from './components/admin/delete-member/delete-member.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

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
    path: 'dashboard',
    component: DashboardComponent,
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

  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
