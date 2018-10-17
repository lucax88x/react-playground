import { inject, injectable } from 'inversify';
import { call, put } from 'redux-saga/effects';
import { TodosActions } from 'src/actions';
import {
  getTodosAsSagaErrorAction,
  getTodosAsSagaSuccessAction
} from 'src/actions/todos';
import { TodoModel } from 'src/models/todo';

import { ITodoApi } from '../apis/interfaces';
import { TYPES } from '../inversify.types';

@injectable()
export class TodosSaga {
  public constructor(@inject(TYPES.ITodoApi) private todoApi: ITodoApi) {}

  public *getTodos(action: TodosActions) {
    try {
      const data = yield call<TodoModel[]>(this.todoApi.get, []);

      yield put(getTodosAsSagaSuccessAction(data));
    } catch (e) {
      yield put(getTodosAsSagaErrorAction());
    } finally {
      // handle axios cancel here
      // if (yield cancelled()) {
      //   yield put(actions.requestFailure('Sync cancelled!'));
      // }
    }
  }
}
