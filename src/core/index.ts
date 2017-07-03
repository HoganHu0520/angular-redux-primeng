import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import MinHeightMode from './directives/min-height-mode';

@NgModule({
  declarations: [MinHeightMode],
  exports: [MinHeightMode],
  imports: [CommonModule],
})
export class CoreModule {}
