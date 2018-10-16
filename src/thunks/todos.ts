import { inject, injectable } from 'inversify';
import { ThunkDispatch } from 'redux-thunk';

import { TodosActions } from '../actions';
import {
  getTodosAction,
  getTodosErrorAction,
  getTodosSuccessAction
} from '../actions/todos';
import { ITodoApi } from '../apis/interfaces';
import { TYPES } from '../inversify.types';
import { ITodosState } from '../states/todos';

@injectable()
export class TodosThunks {
  public constructor(@inject(TYPES.ITodoApi) private todoApi: ITodoApi) {}

  public getTodos() {
    return async (dispatch: ThunkDispatch<ITodosState, null, TodosActions>) => {
      dispatch(getTodosAction());

      try {
        const data = await this.todoApi.get();
        return dispatch(getTodosSuccessAction(data));
      } catch (error) {
        return dispatch(getTodosErrorAction());
      }
    };
  }
}
