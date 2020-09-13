import {createStore , compose, applyMiddleware} from 'redux';
import allRecucers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga'; 

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>{
    const store = createStore(allRecucers,
          
          compose(applyMiddleware(sagaMiddleware),window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']())
    );
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore
