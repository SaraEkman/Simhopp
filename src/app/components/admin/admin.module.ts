import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from 'src/app/components/admin/admin-routing.module'
import { MatCardModule } from '@angular/material/card'
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component'

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DashboardComponent],
  imports: [CommonModule, AdminRoutingModule, MatCardModule],
  exports: [DashboardComponent],
})
export class AdminModule {}
