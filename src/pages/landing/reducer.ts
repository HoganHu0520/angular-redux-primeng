import { LandingPageAction, LandingPageActions } from './actions';
import { Column } from './models';

export interface ILandingStatusModel {
  tabIndex: number;
  clientManagement?: IClientManagementModel;
}

export interface IClientManagementModel {
  columns: Column[];
  dataMode?: string;
}

const INITIAL_MODEL: ILandingStatusModel = {
  tabIndex: 0,
  clientManagement: {
    dataMode: 'clientMode',
    columns: [],
  }
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
