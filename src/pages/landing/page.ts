import { Component, Input } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { SelectItem } from 'primeng/primeng';

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

  get selectDataMode() {
    return this._clientManagementModel.dataMode;
  }

  set selectDataMode(value: string) {
    this._clientManagementModel.dataMode = value;
    this.updateClientManagement();
  }

  get frozenColumns() {
    return this._clientManagementModel.frozenColumns;
  }

  // set frozenColumns(values: Column[]) {
  //   this._clientManagementModel.frozenColumns = values;
  //   this.updateClientManagement();
  // }

  get showColumns() {
    return this._clientManagementModel.showColumns == null
      ? this.columns
      : this._clientManagementModel.showColumns;
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
    <Column> { label: 'Client Number', value: 'clientNumber' },
    <Column> { label: 'First Name', value: 'firstName' },
    <Column> { label: 'City', value: 'city', filterMode: 'in' }
  ];

  cities: any[] = [
    { label: 'SH', value: 'SH' },
    { label: 'BJ', value: 'BJ' },
  ];

  constructor(private actions: LandingPageActions) {
    this.clientManagementModel$.subscribe(value => {
      console.log('change');
      this._clientManagementModel = value;
      this._showColumns = this._clientManagementModel.showColumns == null
        ? this.columns.map(col => col.value)
        : (<Column[]> this._clientManagementModel.showColumns).map(col => col.value);
      this._clientManagementModel.showColumns = this._clientManagementModel.showColumns == null
        ? this.columns
        : this._clientManagementModel.showColumns;
      this._frozenColumns = this._clientManagementModel.frozenColumns.map(col => col.value);
      this.columns.forEach((col: Column) => {
        if (this._frozenColumns.indexOf(col.value) >= 0) {
          col.frozen = true;
        }
      });

      this.updateClientManagement();
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
    this._clientManagementModel.showColumns = this.columns.filter(col => this._showColumns.indexOf(col.value) >= 0);
    this.updateClientManagement();
  }

  handleFrozenColumnsChange(event) {
    this._clientManagementModel.frozenColumns = this.columns.filter(col => {
      const canFreeze = this._frozenColumns.indexOf(col.value) >= 0;
      col.frozen = canFreeze;
      return canFreeze;
    });
    this._clientManagementModel.showColumns.forEach((col: Column) => {
      if (this._frozenColumns.indexOf(col.value) >= 0) {
        col.frozen = true;
      }
    });
    this.updateClientManagement();
  }
}
