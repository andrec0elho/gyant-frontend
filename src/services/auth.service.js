import axios from 'axios';
import { createHeaders } from './utils.service';

export class AuthService {

  async login(credentials) {
    const { data } = await axios.post('http://localhost:3010/login', credentials, { headers: createHeaders() });

    const { token } = data;

    return token;
  }
}