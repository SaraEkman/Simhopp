import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { GlobalConstants } from './shared/global-constants'
import { RouteGuardService } from './services/route-guard.service'
import { DashboardComponent } from './components/admin/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [RouteGuardService],
        data: { expectedRole: [GlobalConstants.user, GlobalConstants.admin] },
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
