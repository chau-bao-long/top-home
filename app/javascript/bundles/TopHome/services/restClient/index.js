import axios from 'axios'
import { DEFAULT_API_CONFIG } from './config'

class TopHomeApi {
  constructor(config = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
  }

  login(email, name, password) {
    const params = new URLSearchParams()
    params.append('email', password)
    params.append('password', password)
    client.post('/sessions', params)
  }
}

export { TopHomeApi }
