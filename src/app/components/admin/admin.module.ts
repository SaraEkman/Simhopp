import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module'
import { MatCardModule } from '@angular/material/card'
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component'
import { ConfirmationComponent } from './confirmation/confirmation.component'
import { ShowNewsComponent } from './news/show-news/show-news.component'
import { ShowMembersComponent } from './members/show-members/show-members.component'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SanitizeHtmlPipe } from './news/manage-news/sanitize-html.pipe';
import { ManageNewsComponent } from './news/manage-news/manage-news.component';
import { ManageMembersComponent } from './members/manage-members/manage-members.component'
import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DashboardComponent,
    ConfirmationComponent,
    ShowNewsComponent,
    ShowMembersComponent,
    SanitizeHtmlPipe,
    ManageNewsComponent,
    ManageMembersComponent
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
    AngularEditorModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatButtonToggleModule,
  ],
  exports: [DashboardComponent, SanitizeHtmlPipe],
  providers: [SanitizeHtmlPipe],
})
export class AdminModule {}
