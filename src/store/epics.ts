import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { TestAPIEpics } from '@/actions/epics';

@Injectable()
export class RootEpics {
  constructor(private testAPIEpics: TestAPIEpics) {}

  public createEpics(): any[] {
    return [
      this.testAPIEpics.createEpic('self')
    ];
  }
}
