import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  TabViewModule, InputTextModule, ButtonModule, DropdownModule, SliderModule,
  SelectButtonModule, SplitButtonModule, DataTableModule, MultiSelectModule
} from 'primeng/primeng';

import CoreModule from '@/core';

import { LandingPageComponent } from './page';
import { LandingPageEpics } from './epics';
import { LandingPageActions } from './actions';

export { ILandingStatusModel } from './reducer';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  providers: [LandingPageEpics, LandingPageActions],
  imports: [
    FormsModule, CoreModule, CommonModule,
    InputTextModule, ButtonModule, TabViewModule, SelectButtonModule,
    SplitButtonModule, DataTableModule, DropdownModule, MultiSelectModule,
    SliderModule
  ],
})
export class LandingPageModule {}
