import axios from 'axios';

export class AuthService {

  async login(credentials) {
    const { token } = await axios.post('http://localhost:3000/login', credentials);

    return token;
  }
}