import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MinHeightMode from './directives/min-height-mode';
import { BroadCaster } from './services/BroadCaster';

@NgModule({
  declarations: [MinHeightMode],
  providers: [BroadCaster],
  exports: [MinHeightMode],
  imports: [CommonModule],
})
export default class CoreModule {}
