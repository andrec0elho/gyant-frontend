import { combineReducers } from 'redux';

export const authentication = (state = {}, action) => {
  console.log("-----", action)
  switch (action.type) {
    case 'LOGIN':
      return { ...state, authenticated: true };
    case 'LOGOUT':
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  authentication,
});