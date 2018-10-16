import { inject, injectable } from 'inversify';
import { call, put } from 'redux-saga/effects';
import { TodosActions } from 'src/actions';
import {
  getTodosAsSagaErrorAction,
  getTodosAsSagaSuccessAction
} from 'src/actions/todos';

import { ITodoApi } from '../apis/interfaces';
import { TYPES } from '../inversify.types';

@injectable()
export class TodosSaga {
  public constructor(@inject(TYPES.ITodoApi) private todoApi: ITodoApi) {}

  public *getTodos(action: TodosActions) {
    try {
      const data = yield call(this.todoApi.get, null);

      yield put(getTodosAsSagaSuccessAction(data));
    } catch (e) {
      yield put(getTodosAsSagaErrorAction());
    }
  }
}
