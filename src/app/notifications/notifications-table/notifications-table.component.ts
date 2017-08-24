import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pal-notifications-table',
  templateUrl: './notifications-table.component.html',
  styleUrls: ['./notifications-table.component.less']
})
export class NotificationsTableComponent {
  @Input() user: any;
  @Output() onChangeSomething = new EventEmitter<string>();

}
