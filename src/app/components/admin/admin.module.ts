import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module'
import { MatCardModule } from '@angular/material/card'
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component'
// import { MenuItems } from 'src/app/modules/menu-items';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { ShowNewsComponent } from './show-news/show-news.component';
import { ShowMembersComponent } from './show-members/show-members.component'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DashboardComponent, SidebarComponent, ConfirmationComponent, ShowNewsComponent, ShowMembersComponent],
  imports: [CommonModule, AdminRoutingModule, MatCardModule,MatTableModule],
  exports: [DashboardComponent],
  // providers: [MenuItems],
})
export class AdminModule {}
