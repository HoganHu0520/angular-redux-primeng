import { LandingPageAction, LandingPageActions } from './actions';

export interface ILandingStatusModel {
  tabIndex: number;
  dataMode?: string;
}

const INITIAL_MODEL: ILandingStatusModel = {
  tabIndex: 0,
  dataMode: 'clientMode',
};

export function createLandingPageReducer() {
  return (state: ILandingStatusModel = INITIAL_MODEL, action: LandingPageAction): ILandingStatusModel => {
    switch (action.type) {
      case LandingPageActions.CHANGE_STATUS:
        return {
          ...state,
          ...action.payload,
        };
      case LandingPageActions.CHANGE_SUCCESSED:
        return {
          ...state,
        };
    }

    return state;
  };
}
