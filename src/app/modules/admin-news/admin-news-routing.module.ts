import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDashboardComponent } from 'src/app/components/adminNews/news-dashboard/news-dashboard.component';

const routes: Routes = [
  {
    path: 'newsDashboard',
    component: NewsDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNewsRoutingModule { }
