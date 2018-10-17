import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { TodosActions } from 'src/actions';
import {
  GET_TODOS_AS_SAGA,
  GET_TODOS_AS_SAGA_SUCCESS
} from 'src/actions/todos';
import { container } from 'src/inversify.config';
import { TYPES } from 'src/inversify.types';
import { ITodosState } from 'src/states/todos';
import { getThunkAction } from 'src/test/thunk.helpers';

import { TodosThunks } from './todos';

export const mockStore = configureMockStore<
  ITodosState,
  ThunkDispatch<ITodosState, null, TodosActions>
>([thunk]);

describe('TodosThunks', () => {
  let todosThunks: TodosThunks;
  beforeEach(() => {
    todosThunks = container.get<TodosThunks>(TYPES.TodosThunks);
  });

  describe('getTodos', () => {
    it('fetches all todos ', async () => {
      const store = mockStore();

      // 1stway
      await store.dispatch(todosThunks.getTodos());

      // 2nd way
      store.dispatch(todosThunks.getTodos());

      expect(await getThunkAction(store, GET_TODOS_AS_SAGA)).toEqual({
        type: GET_TODOS_AS_SAGA
      });
      expect(await getThunkAction(store, GET_TODOS_AS_SAGA_SUCCESS)).toEqual({
        items: [],
        type: GET_TODOS_AS_SAGA_SUCCESS
      });
    });
  });
});
