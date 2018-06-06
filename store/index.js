import { createStore } from 'redux';
import reducer from '../reducers';

const configureStore = () => {
  const store = createStore(reducer);

  store.subscribe(() => {
    window.localStorage = JSON.stringify(store.getState());
  });

  return store;
}

export default configureStore;