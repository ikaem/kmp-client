import { Method } from 'axios';

export interface StartAction {
  type: string;
  payload: null;
}

export interface SuccessAction {
  type: string;
  payload: any;
}

export interface FailureAction {
  type: string;
  payload: { errors: ErrorData[] };
}

export interface ApiConfig {
  path: string;
  method?: Method;
  body?: any;
}

export interface ErrorData {
  msg: string;
  param?: string;
}

export interface ApiStatus {
  isLoading: boolean;
  isValid: boolean;
  isEmpty: boolean;
  isError: boolean;
  errors: { msg: string; param?: string }[] | null;
}
