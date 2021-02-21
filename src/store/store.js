import { createStore } from 'redux';
import { reducers } from './reducers';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();


export const store = createStore(reducers, persistedState);

store.subscribe(() => {
  console.log(".............. STORE ..................")
  saveState({ ...store.getState() });
});