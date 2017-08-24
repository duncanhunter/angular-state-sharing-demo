import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'pal-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less']
})
export class TopNavComponent implements OnInit {
  user$: Observable<any>;

  constructor(public authService: AuthService) {
    this.user$ = this.authService.user$;
  }

  ngOnInit() {
  }



}
