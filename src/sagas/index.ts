import { takeLatest } from 'redux-saga/effects';
import { GET_TODOS_AS_SAGA } from '../actions/todos';
import { container } from '../inversify.config';
import { TYPES } from '../inversify.types';

import { TodosSaga } from './todos';

const todosSaga = container.get<TodosSaga>(TYPES.TodosSaga);

export function* sagas() {
  yield takeLatest(GET_TODOS_AS_SAGA, todosSaga.getTodos.bind(todosSaga));
}
