import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';

import {
  GET_TODOS_AS_SAGA_ERROR,
  GET_TODOS_AS_SAGA_SUCCESS
} from '../actions/todos';
import { container } from '../inversify.config';
import { TYPES } from '../inversify.types';
import { TodosSaga } from './todos';

const axiosMock = new MockAdapter(axios);

describe('TodosSaga', () => {
  let todosSaga: TodosSaga;

  beforeEach(() => {
    todosSaga = container.get<TodosSaga>(TYPES.TodosSaga);
  });

  describe('getTodos', () => {
    it('fetches all todos ', () => {
      // ARRANGE
      const items = [{ id: 1, name: 'John Smith' }];

      axiosMock
        .onGet('https://jsonplaceholder.typicode.com/todos')
        .reply(200, items);

      // ACT && ASSERT
      return expectSaga(todosSaga.getTodos.bind(todosSaga))
        .put({
          meta: undefined,
          payload: items,
          type: GET_TODOS_AS_SAGA_SUCCESS
        })
        .run();
    });
    it('gets error when cannot fetch ', () => {
      // ARRANGE
      axiosMock
        .onGet('https://jsonplaceholder.typicode.com/todos')
        .networkError();

      // ACT && ASSERT
      return expectSaga(todosSaga.getTodos.bind(todosSaga))
        .put({
          meta: undefined,
          payload: undefined,
          type: GET_TODOS_AS_SAGA_ERROR
        })
        .run();
    });
  });
});
