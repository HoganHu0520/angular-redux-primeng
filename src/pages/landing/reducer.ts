import { LandingPageAction, LandingPageActions } from './actions';

interface ILandingStatusModel {
  tabIndex: number;
}

export function createLandingPageReducer() {
  return (state: ILandingStatusModel = { tabIndex: 0 }, action: LandingPageAction): ILandingStatusModel => {
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
