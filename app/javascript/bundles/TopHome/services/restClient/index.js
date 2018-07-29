import axios from "axios"
import { DEFAULT_API_CONFIG } from "./config"

class TopHomeApi {
  constructor(config = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._addErrorInterceptor(this.client)
  }

  login({account, password}) {
    const params = new URLSearchParams()
    params.append("name", account)
    params.append("password", password)
    return this.client.post("/api/v1/sessions", params)
  }

  _addErrorInterceptor(client: Axios) {
    client.interceptors.response.use(res => res, error => {
      throw error.response.data.errors
    })
  }
}

export { TopHomeApi }
