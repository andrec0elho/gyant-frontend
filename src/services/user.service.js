import axios from 'axios';
import { createHeaders } from './utils.service';

export class UserService {
  async getMyProfile() {
    const { data } = await axios.get('http://localhost:3010/user/my-profile', { headers: createHeaders(true) });

    return data;
  }
}