import { TestAPIAction, TestAPIActions } from './actions';

interface ITestModel {
  value?: string;
  loading: boolean;
}

export function createTestAPIReducer(testType: string) {
  return (state: ITestModel = { value: 'hogan', loading: false },
    action: TestAPIAction): ITestModel => {
    if (!action.meta || action.meta.testType !== testType) {
      return state;
    }

    switch (action.type) {
      case TestAPIActions.LOAD_STARTED:
        return {
          ...state,
          value: 'hogan',
          loading: true,
        };
      case TestAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          value: action.payload,
          loading: false,
        };
      case TestAPIActions.LOAD_FAILED:
        return {
          ...state,
          value: 'hogan',
          loading: false,
        };
    }

    return state;
  };
}
