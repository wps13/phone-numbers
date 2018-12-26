import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import { reducer } from './store/redux'
import { watchSaga } from './store/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,
    applyMiddleware(watchSaga))


sagaMiddleware.run(watchSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


