import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { TodosActions } from '../actions';
import {
  getTodosAction,
  getTodosErrorAction,
  getTodosSuccessAction
} from '../actions/todos';
import { callGetTodos } from '../services/todos';
import { TodosState } from '../states/todos';

// export async function getTodos() {
//   return async (dispatch: Dispatch) => {
//     try {
//       const todos = await callGetTodos();
//       dispatch(getTodosSuccessAction(todos.data));
//     } catch (e) {
//       // dispatch()
//     }
//   };
// }

export const getTodos: ActionCreator<
  ThunkAction<Promise<TodosActions>, TodosState, null, TodosActions>
> = () => {
  return dispatch => {
    dispatch(getTodosAction);

    return callGetTodos()
      .then(result => dispatch(getTodosSuccessAction(result.data)))
      .catch(e => dispatch(getTodosErrorAction()));
  };
};
