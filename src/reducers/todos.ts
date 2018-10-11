import { map } from 'ramda';

import { TodosActions } from '../actions';
import { ADD_TODO, TOGGLE_TODO } from '../actions/todos';
import { TodosState } from '../states/todos';

const todos = (state = new TodosState(), action: TodosActions): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            completed: false,
            id: action.payload.id,
            text: action.payload.text
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoItems: map(
          todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo,
          state.todoItems
        )
      };

    default:
      return state;
  }
};

export default todos;
