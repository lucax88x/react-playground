import { produce } from 'immer';
import { find } from 'ramda';

import { TodosActions } from '../actions';
import {
  ADD_TODO,
  GET_TODOS,
  GET_TODOS_AS_EPIC,
  GET_TODOS_AS_EPIC_ERROR,
  GET_TODOS_AS_EPIC_SUCCESS,
  GET_TODOS_AS_SAGA,
  GET_TODOS_AS_SAGA_ERROR,
  GET_TODOS_AS_SAGA_SUCCESS,
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
        const toUpdateTodo = find(
          todo => todo.id === action.payload,
          draft.todos
        );
        if (!!toUpdateTodo) {
          toUpdateTodo.completed = !toUpdateTodo.completed;
        }
        return;
      case GET_TODOS:
      case GET_TODOS_AS_SAGA:
      case GET_TODOS_AS_EPIC:
        draft.isTodosBusy = true;
        draft.todos = [];
        return;
      case GET_TODOS_SUCCESS:
      case GET_TODOS_AS_SAGA_SUCCESS:
      case GET_TODOS_AS_EPIC_SUCCESS:
        draft.isTodosBusy = false;
        draft.todos = action.payload;
        return;
      case GET_TODOS_ERROR:
      case GET_TODOS_AS_SAGA_ERROR:
      case GET_TODOS_AS_EPIC_ERROR:
        draft.isTodosBusy = false;
        return;
      default:
        return initialTodosState;
    }
  });

export default todos;
