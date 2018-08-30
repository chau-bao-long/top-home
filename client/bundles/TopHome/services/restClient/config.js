const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL,
  timeout: process.env.TIME_OUT,
  apiVersion: "v1"
};

export { DEFAULT_API_CONFIG }

