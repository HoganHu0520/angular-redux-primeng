import { Component, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { PlatformLocation, LocationStrategy }from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { BroadCaster} from './utils/BroadCaster';
import { ServiceLocator } from './utils/ServiceLocator';

@Component({
  selector: 'body',
  providers: [
    Title
  ],
  template: `
    <div class="router-container">
      <p-dropdown></p-dropdown>
    </div>
    <div class="footer">© Hancock First 2017. All Rights Reserved</div>
   `,
  styleUrls: ['app.scss']
})
export class App {
  @HostBinding('class') public cssClass = '';
  @HostBinding('attr.size') size = '';

  private router: Router;
  private broadCaster: BroadCaster;
  private activateRoute: ActivatedRoute;
  private screenWidth: number = 0;

  constructor(
    private platformLocation: PlatformLocation,
    private locationStrategy: LocationStrategy,
    private cookieService: CookieService,
    router: Router,
    activateRoute: ActivatedRoute
  ) {
    let rootParam = this.parseQueryString();
    this.broadCaster = ServiceLocator.broadCaster;
    this.router = router;
    this.activateRoute = activateRoute;

    this.size = screenSize();
  }

  @HostListener('window:resize', ['$event'])
  /**
   * add class tag of screen size
   */
  onResize(event: any) {
    this.size = screenSize();
  }

  /**
   * get parameter from location when first time load app.
   */
  parseQueryString() {
    var str = window.location.search;
    var objURL = {};

    str.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"),
      ($0, $1, $2, $3) => objURL[$1] = $3.replace(/%20/g, " ")
    );
    console.log('get params from location success');
    console.log(objURL);
    return objURL;
  };
}

function screenSize() {
  const width = window.innerWidth;
  let classTag = '';
  if (width >= 1024) {
    classTag = 'hc-l';
  } else if (width < 1024 && width >= 600) {
    classTag = 'hc-m';
  } else {
    classTag = 'hc-s';
  }
  return classTag;
}
