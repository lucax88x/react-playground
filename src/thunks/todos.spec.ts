import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { TodosActions } from 'src/actions';
import { ITodosState } from 'src/states/todos';

import { GET_TODOS_ERROR, GET_TODOS_SUCCESS } from '../actions/todos';
import { container } from '../inversify.config';
import { TYPES } from '../inversify.types';
import { TodosThunks } from './todos';

const axiosMock = new MockAdapter(axios);
const mockThunkStoreCreator = configureMockStore<
  ITodosState,
  ThunkDispatch<ITodosState, null, TodosActions>
>([thunk]);

describe('TodosThunks', () => {
  let thunkStore: MockStoreEnhanced<
    ITodosState,
    ThunkDispatch<ITodosState, null, TodosActions>
  >;
  let todosThunks: TodosThunks;

  beforeEach(() => {
    todosThunks = container.get<TodosThunks>(TYPES.TodosThunks);
    thunkStore = mockThunkStoreCreator();
  });

  describe('getTodos', () => {
    it('fetches all todos ', async () => {
      // ARRANGE
      const items = [{ id: 1, name: 'John Smith' }];

      axiosMock
        .onGet('https://jsonplaceholder.typicode.com/todos')
        .reply(200, items);

      // ACT
      const action = await thunkStore.dispatch(todosThunks.getTodos());

      // ASSERT
      expect(action).toEqual({
        payload: items,
        type: GET_TODOS_SUCCESS
      });
    });

    it('gets error when cannot fetch ', async () => {
      // ARRANGE
      axiosMock
        .onGet('https://jsonplaceholder.typicode.com/todos')
        .networkError();
      
      // ACT
      const action = await thunkStore.dispatch(todosThunks.getTodos());

      // ASSERT
      expect(action).toEqual({
        type: GET_TODOS_ERROR
      });
    });
  });
});
