import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  TabViewModule, InputTextModule, ButtonModule, DropdownModule,
  SelectButtonModule, SplitButtonModule, DataTableModule, MultiSelectModule,
  OverlayPanelModule, ListboxModule, CheckboxModule
} from 'primeng/primeng';

import CoreModule from '@/core';

import { LandingPageComponent } from './page';
import { LandingPageEpics } from './epics';
import { LandingPageActions } from './actions';

export { ILandingStatusModel, IClientManagementModel } from './reducer';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  providers: [LandingPageEpics, LandingPageActions],
  imports: [
    FormsModule, CoreModule, CommonModule,
    InputTextModule, ButtonModule, TabViewModule, SelectButtonModule,
    SplitButtonModule, DataTableModule, DropdownModule, MultiSelectModule,
    OverlayPanelModule, ListboxModule, CheckboxModule
  ],
})
export class LandingPageModule {}
