const { REACT_APP_API_URL } = process.env;

export class BaseService {
  apiUrl = REACT_APP_API_URL;
}