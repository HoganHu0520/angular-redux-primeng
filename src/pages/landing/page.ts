import { Component, Input } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { LandingPageActions } from './actions';
import { IClientManagementModel } from './reducer';
import { Column } from './models';

@Component({
  templateUrl: './page.html',
  styleUrls: [ './index.scss' ]
})
export class LandingPageComponent {
  @select(['landingPageStatus', 'tabIndex'])
  readonly tabIndex: Observable<number>;

  @select(['landingPageStatus', 'clientManagement'])
  readonly clientManagementModel$: Observable<IClientManagementModel>;

  private _clientManagementModel: IClientManagementModel;

  private _showColumns: string[];

  private _frozenColumns: string[];

  filterCondition = (col:Column) => col.show;

  get selectDataMode() {
    return this._clientManagementModel.dataMode;
  }

  set selectDataMode(value: string) {
    this._clientManagementModel.dataMode = value;
    this.updateClientManagement();
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

  columns: Column[] = [
    new Column ({ label: 'Client Number', value: 'clientNumber', width: '100px' }),
    new Column ({ label: 'First Name', value: 'firstName', width: '800px' }),
    new Column ({ label: 'City', value: 'city', filterMode: 'in', width: '800px' })
  ];

  cities: any[] = [
    { label: 'SH', value: 'SH' },
    { label: 'BJ', value: 'BJ' },
  ];

  constructor(private actions: LandingPageActions) {
    this.clientManagementModel$.subscribe(value => {
      this._clientManagementModel = value;
      this._showColumns = this._clientManagementModel.columns.length == 0
        ? this.columns.map(col => col.value)
        : this._clientManagementModel.columns.map(col => col.value);

      if (this._clientManagementModel.columns.length == 0) {
        this._clientManagementModel.columns = this.columns;
        this.updateClientManagement();
      }
    });
  }

  handleTabChange(event) {
    this.actions.changeStatus({ tabIndex: event.index });
  }

  hasValueOfArray(arr: Array<any>, value: any): boolean {
    return arr.indexOf(value) >= 0;
  }

  updateClientManagement() {
    this.actions.changeStatus( { clientManagement: this._clientManagementModel });
  }

  handleShowColumnsChange(event) {
    this._clientManagementModel.columns.forEach(col => {
      if (this._showColumns.indexOf(col.value) >= 0) {
        col.show = true;
      } else {
        col.show = false;
      }
    });
    this.updateClientManagement();
  }

  handleFrozenColumnsChange(event) {
    this._clientManagementModel.columns.forEach(col => {
      if (this._frozenColumns.indexOf(col.value) >= 0) {
        col.frozen = true;
      } else {
        col.frozen = false;
      }
    });

    this.updateClientManagement();
  }
}
