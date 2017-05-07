import { createStore } from 'redux';
import reducers from './reducers';


const INITIAL_STATE = {};
const Store = createStore(reducers, INITIAL_STATE);

export default Store;
