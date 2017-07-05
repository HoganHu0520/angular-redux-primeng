import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = any;
interface MetaData { type: string; };
export type LandingPageAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class LandingPageActions {
  static readonly CHANGE_STATUS = 'LANDING_PAGE_CHANGE_STATUS';
  static readonly CHANGE_SUCCESSED = 'LANDING_PAGE_CHANGE_SUCCESSED';

  @dispatch()
  changeStatus = (payload: Payload): LandingPageAction => ({
    type: LandingPageActions.CHANGE_STATUS,
    meta: { type: LandingPageActions.CHANGE_STATUS },
    payload,
  });

  changeSuccessed = (): LandingPageAction => ({
    type: LandingPageActions.CHANGE_SUCCESSED,
    meta: { type: LandingPageActions.CHANGE_SUCCESSED },
    payload: null,
  });
}
