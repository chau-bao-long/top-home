// @flow
import AxiosRequestConfig from 'axios';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL,
  timeout: process.env.TIME_OUT,
  apiVersion: 'v1',
};

const ERROR_CODES = {
  uncaught: 500,
  unauthenticated: 103,
};

const ERROR_MSGS = {
  uncaught: 'Mishap mays happened, Sorry for the inconvenient!',
}

export { DEFAULT_API_CONFIG, ERROR_CODES, ERROR_MSGS };
