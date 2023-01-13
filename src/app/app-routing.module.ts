import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { GlobalConstants } from './shared/global-constants'
import { RouteGuardService } from './services/route-guard.service'

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'simhopp',
  //   component: FullComponent,
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

  

  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
