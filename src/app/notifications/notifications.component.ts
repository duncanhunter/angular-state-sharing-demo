import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'pal-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {
  user$: Observable<any>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
  }

  someFunction(someString: string) {
    console.log(someString);
  }

}
