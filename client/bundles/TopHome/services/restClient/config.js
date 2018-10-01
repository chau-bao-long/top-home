const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL,
  timeout: process.env.TIME_OUT,
  apiVersion: "v1"
};

const ERROR_CODES = {
  unauthenticated: 103,
};

export { DEFAULT_API_CONFIG, ERROR_CODES }

