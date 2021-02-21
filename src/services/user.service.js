import axios from 'axios';
import { createHeaders } from './utils.service';
import { BaseService } from './base.service';

export class UserService extends BaseService {
  async getMyProfile() {
    const { data } = await axios.get(`${this.apiUrl}/user/my-profile`, { headers: createHeaders(true) });

    return data;
  }
}