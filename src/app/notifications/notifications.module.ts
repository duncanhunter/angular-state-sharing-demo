import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { NotificationsTableComponent } from './notifications-table/notifications-table.component';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ],
  declarations: [NotificationsComponent, NotificationsTableComponent]
})
export class NotificationsModule { }
