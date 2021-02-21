import axios from 'axios';
import { createHeaders } from './utils.service';
import { BaseService } from './base.service';

export class AuthService extends BaseService {

  async login(credentials) {
    const { data } = await axios.post(`${this.apiUrl}/login`, credentials, { headers: createHeaders() });

    const { token } = data;

    return token;
  }
}