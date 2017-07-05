import { Component, Input } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { LandingPageActions } from './actions';

@Component({
  templateUrl: './page.html',
  styleUrls: [ './index.scss' ]
})
export class LandingPageComponent {
  @select(['landingPageStatus', 'tabIndex'])
  readonly tabIndex: Observable<number>;

  constructor(private actions: LandingPageActions) {
  }

  handleTabChange(event) {
    this.actions.changeStatus({ tabIndex: event.index });
  }
}
