import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabViewModule, InputTextModule, ButtonModule } from 'primeng/primeng';

import CoreModule from '@/core';

import { LandingPageComponent } from './page';
import { LandingPageEpics } from './epics';
import { LandingPageActions } from './actions';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  providers: [LandingPageEpics, LandingPageActions],
  imports: [FormsModule, CoreModule, CommonModule, InputTextModule, ButtonModule, TabViewModule],
})
export class LandingPageModule {}
