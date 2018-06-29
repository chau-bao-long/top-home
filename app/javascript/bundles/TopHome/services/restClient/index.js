import axios from 'axios'
import { DEFAULT_API_CONFIG } from './config'

class TopHomeApi {
  constructor(config = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
  }

  login(payload) {
    const params = new URLSearchParams()
    debugger
    params.append('email', payload.email)
    params.append('password', payload.password)
    client.post('/api/v1/sessions', params)
  }
}

export { TopHomeApi }
