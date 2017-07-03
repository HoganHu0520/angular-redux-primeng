import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';
import { HttpModule, Http, JsonpModule } from "@angular/http";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DropdownModule } from 'primeng/primeng';

import { AppCompnent } from './app';
import Routers from './routers';
import { requestOptionsProvider } from './services/default-request-options.service';
import { ServiceLocator } from './utils/ServiceLocator';
import { BroadCaster} from './utils/BroadCaster';
import { APP_CONFIG } from './types';

import { StoreModule } from './store/module';
import { TestModule } from './actions/module';

import './styles/common.g.scss';

// config object
let config = require('config/config.dev.json');

if (process.env.ENV === 'production' ) {
  config = require('config/config.production.json');
} else if (process.env.ENV === 'staging' ) {
  config = require('config/config.staging.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routers),
    HttpModule,
    JsonpModule,
    DropdownModule,
    TestModule,
    StoreModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      { provide: APP_CONFIG, useValue: config},
      requestOptionsProvider,
      BroadCaster,
      CookieService
    ],
  declarations: [
    AppCompnent,
  ],
  entryComponents: [],
  bootstrap: [AppCompnent]
})
export class AppModule {
  constructor(private injector: Injector, private broadCaster: BroadCaster) {
    ServiceLocator.injector = this.injector;
    ServiceLocator.broadCaster = this.broadCaster;
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
