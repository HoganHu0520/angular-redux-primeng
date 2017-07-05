import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { createLandingPageReducer } from '@/pages/landing/reducer';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    landingPageStatus: createLandingPageReducer(),
    router: routerReducer,
  }));
