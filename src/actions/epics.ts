import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { TestAPIAction, TestAPIActions } from './actions';
import { TestAPIService } from './service';
import { IAppState } from '@/store/model';

type Predicate = (any) => boolean;

@Injectable()
export class TestAPIEpics {
  constructor(
    private service: TestAPIService,
    private actions: TestAPIActions,
  ) { }

  public createEpic(testType: string) {
    return createEpicMiddleware(this.createLoadTestEpic(testType));
  }

  private createLoadTestEpic(testType): Epic<TestAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(TestAPIActions.LOAD_TEST)
      .switchMap(a => this.service.getTest()
        .map(data => this.actions.loadSucceeded(testType, data))
        .catch(response => of(this.actions.loadFailed(testType, {
          status: '' + response.status,
        })))
        .startWith(this.actions.loadStarted(testType)));
  }
}
