import { produce } from 'immer';
import { map } from 'ramda';

import { TodosActions } from '../actions';
import {
  ADD_TODO,
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  TOGGLE_TODO
} from '../actions/todos';
import { ITodosState } from '../states/todos';

const initialTodosState: ITodosState = {
  isTodosBusy: false,
  todos: []
};

const todos = (state = initialTodosState, action: TodosActions): ITodosState =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TODO:
        draft.todos.push({
          completed: false,
          id: action.payload.id,
          title: action.payload.title
        });
        return;
      case TOGGLE_TODO:
        // todo with immer
        return {
          ...state,
          todos: map(
            todo =>
              todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo,
            state.todos
          )
        };
      case GET_TODOS:
        draft.isTodosBusy = true;
        return;
      case GET_TODOS_SUCCESS:
        draft.isTodosBusy = false;
        draft.todos = action.payload;
        return;
      case GET_TODOS_ERROR:
        draft.isTodosBusy = false;
        return;
    }
  });

export default todos;
