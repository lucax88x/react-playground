import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { TodosActions } from './actions';
import App from './app';
import epics from './epics';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { sagas } from './sagas';
import { ITodosState } from './states/todos';

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware<
  TodosActions,
  TodosActions,
  ITodosState
>();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware, epicMiddleware, logger)
  )
);

sagaMiddleware.run(sagas);
epicMiddleware.run(epics);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
