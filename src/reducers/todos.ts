import { map } from 'ramda';

import { TodosActions } from '../actions';
import {
  ADD_TODO,
  GET_TODOS,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS,
  TOGGLE_TODO
} from '../actions/todos';
import { TodosState } from '../states/todos';

const todos = (state = new TodosState(), action: TodosActions): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            completed: false,
            id: action.payload.id,
            title: action.payload.title
          }
        ]
      };
    case TOGGLE_TODO:
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
      return {
        ...state,
        isTodosBusy: true
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isTodosBusy: false,
        todos: action.payload
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        isTodosBusy: false
      };
    default:
      return state;
  }
};

export default todos;
