import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageModule } from './login';
import { LandingPageModule } from './landing';

@NgModule({
  declarations: [],
  exports: [],
  imports: [LandingPageModule, LoginPageModule, CommonModule],
})
export class PageModule {}
