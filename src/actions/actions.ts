import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = string;
interface MetaData { testType: string; };
export type TestAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class TestAPIActions {
  static readonly LOAD_TEST = 'LOAD_TEST';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  @dispatch()
  loadTest = (testType: string): TestAPIAction => ({
    type: TestAPIActions.LOAD_TEST,
    meta: { testType },
    payload: null,
  });

  loadStarted = (testType: string): TestAPIAction => ({
    type: TestAPIActions.LOAD_STARTED,
    meta: { testType },
    payload: null,
  })

  loadSucceeded = (testType: string, payload: Payload): TestAPIAction => ({
    type: TestAPIActions.LOAD_SUCCEEDED,
    meta: { testType },
    payload,
  })

  loadFailed = (testType: string, error): TestAPIAction => ({
    type: TestAPIActions.LOAD_FAILED,
    meta: { testType },
    payload: null,
    error,
  })
}
