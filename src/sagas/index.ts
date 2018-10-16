import { takeLatest } from 'redux-saga/effects';
import { GET_TODOS_AS_SAGA } from 'src/actions/todos';
import { container } from 'src/inversify.config';
import { TYPES } from 'src/inversify.types';

import { TodosSaga } from './todos';

const todosSaga = container.get<TodosSaga>(TYPES.TodosSaga);

export function* sagas() {
  yield takeLatest(GET_TODOS_AS_SAGA, todosSaga.getTodos.bind(todosSaga));
}
