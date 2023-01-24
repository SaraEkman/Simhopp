import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module'
import { MatCardModule } from '@angular/material/card'
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component'
// import { MenuItems } from 'src/app/modules/menu-items';
import { SidebarComponent } from './sidebar/sidebar.component'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { ShowNewsComponent } from './news/show-news/show-news.component'
import { ShowMembersComponent } from './members/show-members/show-members.component'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { AddNewsComponent } from './news/add-news/add-news.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ConfirmationComponent,
    ShowNewsComponent,
    ShowMembersComponent,
    AddNewsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [DashboardComponent],
  // providers: [MenuItems],
})
export class AdminModule {}
