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

  @select(['landingPageStatus', 'dataMode'])
  readonly dataMode: Observable<string>;

  private _selectDataMode: string = 'clientMode';

  get selectDataMode() {
    return this._selectDataMode;
  }

  set selectDataMode(value: string) {
    this._selectDataMode = value;
    this.actions.changeStatus({ dataMode: value });
  }

  dataModes = [
    {label:'Client List View (12,786)', value:'clientMode'},
    {label:'MultiFamily List View (7,549)', value:'familyMode'}
  ];

  clients: any[] = [
    { clientNumber: "10001", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10002", firstName: 'hu', city: 'SH'},
    { clientNumber: "10003", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10004", firstName: 'ho', city: 'BJ'},
    { clientNumber: "10005", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10006", firstName: 'hogan', city: 'BJ'},
    { clientNumber: "10007", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10008", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10009", firstName: 'hogan', city: 'BJ'},
    { clientNumber: "10010", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10011", firstName: 'hogan', city: 'SH'},
    { clientNumber: "10012", firstName: 'hogan', city: 'SH'},
  ];

  cities: any[] = [
    { label: 'SH', value: 'SH' },
    { label: 'BJ', value: 'BJ' },
  ];

  constructor(private actions: LandingPageActions) {
    this.dataMode.subscribe(value => this._selectDataMode = value);
  }

  handleTabChange(event) {
    this.actions.changeStatus({ tabIndex: event.index });
  }
}
