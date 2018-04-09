import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers';
import { loadState, saveState} from '../actions/sessionActions';

const persistedSession = loadState();

export function configureStore(deps = {}){

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        reducers, persistedSession,
        applyMiddleware(thunk)
    );
}