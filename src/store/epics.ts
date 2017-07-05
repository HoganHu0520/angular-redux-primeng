import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { LandingPageEpics } from '@/pages/landing/epics';

@Injectable()
export class RootEpics {
  constructor(
    private landingPageEpics: LandingPageEpics
  ) {}

  public createEpics(): any[] {
    return [
      this.landingPageEpics.createEpic()
    ];
  }
}
