import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule, InputTextModule, ButtonModule } from 'primeng/primeng';

import { CoreModule } from '@/core';

import { LoginPageComponent } from './page';

@NgModule({
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  imports: [FormsModule, CoreModule, CommonModule, PasswordModule, InputTextModule, ButtonModule],
})
export class LoginModule {}
