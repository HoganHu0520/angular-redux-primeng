import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { LandingPageAction, LandingPageActions } from './actions';
import { IAppState } from '@/store/model';

type Predicate = (any) => boolean;

@Injectable()
export class LandingPageEpics {
  constructor(
    private actions: LandingPageActions,
  ) { }

  public createEpic() {
    return createEpicMiddleware(this.createLandingPageEpic());
  }

  private createLandingPageEpic(): Epic<LandingPageAction, IAppState> {
    return (action$, store) => action$
      .ofType(LandingPageActions.CHANGE_STATUS)
      .mapTo(this.actions.changeSuccessed());
  }
}
