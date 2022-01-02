import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import StateLoader from './stateLoader/stateLoader';

const stateLoader = new StateLoader();

export const store = createStore(
    reducers,
    stateLoader.loadState(),
    applyMiddleware(thunk)
)

store.subscribe(()=>{
    stateLoader.saveState(store.getState());
})