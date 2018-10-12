import { TodosActions } from '../actions';
import {
  getTodosAction,
  getTodosErrorAction,
  getTodosSuccessAction
} from '../actions/todos';
import { callGetTodos } from '../services/todos';
import { ITodosState } from '../states/todos';
import { Thunk } from '../types/thunk';

export const getTodos: Thunk<TodosActions, ITodosState> = () => {
  return async dispatch => {
    dispatch(getTodosAction());

    try {
      const result = await callGetTodos();
      return dispatch(getTodosSuccessAction(result.data));
    } catch (error) {
      return dispatch(getTodosErrorAction());
    }
  };
};
