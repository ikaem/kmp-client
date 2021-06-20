import { createApiCall } from '../';
import {
  ApiConfig,
  StartAction,
  SuccessAction,
  FailureAction,
  ErrorData,
} from '../types';

export const createApiAction = (
  apiConfig: ApiConfig,
  actionTypes: string[]
) => {
  return async (dispatch: any) => {
    const apiCall = createApiCall(apiConfig);

    const startAction = (): StartAction => {
      return {
        type: actionTypes[0],
        payload: null,
      };
    };

    const successAction = (payload: any): SuccessAction => {
      return {
        type: actionTypes[1],
        payload,
      };
    };

    const failureAction = (errors: ErrorData[]): FailureAction => {
      return {
        type: actionTypes[2],
        payload: { errors },
      };
    };

    await dispatch(startAction());

    try {
      const response = await apiCall();
      await dispatch(successAction(response.data.data));
      return { ok: true };
    } catch (e) {
      const errors: ErrorData[] = e.response?.data?.errors || [
        { msg: e.message },
      ];

      await dispatch(failureAction(errors));
      return { ok: false };
    }
  };
};
