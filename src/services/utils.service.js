export const getUser = () => {
  const userStr = localStorage.getItem('user');

  if (userStr) {
    return JSON.parse(userStr);
  }

  return null;
}

export const getToken = () => {
  return localStorage.getItem('token') || null;
}

export const removeUserStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export const setUserStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const setTokenStorage = (token) => {
  localStorage.setItem('token', token);
}

export const createHeaders = (withToken = false) => {
  const baseHeaders = { 'Content-Type': 'application/json' };

  if (withToken) {
    baseHeaders.Authorization = getToken();
  }

  return baseHeaders;
}