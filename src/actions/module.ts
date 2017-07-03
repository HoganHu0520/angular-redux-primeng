import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAPIActions } from './actions';
import { TestAPIEpics } from './epics';
import { TestAPIService } from './service';
import { StoreModule } from '@/store/module';

@NgModule({
  declarations: [],
  imports: [StoreModule, CommonModule],
  providers: [TestAPIActions, TestAPIEpics, TestAPIService],
})
export class TestModule {}
