// @flow
import axios from "axios"
import { DEFAULT_API_CONFIG } from "./config"

class TopHomeApi {
  client: axios;

  constructor(config: Object = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._addErrorInterceptor(this.client)
  }

  login({account: password}) {
    const params = new URLSearchParams()
    params.append("name", account)
    params.append("password", password)
    return this.client.post("/api/v1/sessions", params)
  }

  createBlog(title: string, body: string) {
    const params = new URLSearchParams()
    params.append("title", title)
    params.append("title", title)
    return this.client.post("/api/v1/blogs", params)
  }

  getBlogs() {
    return this.client.get("/api/v1/blogs")
  }

  getBlog(id: string) {
    return this.client.get("/api/v1/blogs/" + id)
  }

  _addErrorInterceptor(client: axios) {
    client.interceptors.response.use(res => res, error => {
      throw error.response.data.errors
    })
  }
}

export { TopHomeApi }
