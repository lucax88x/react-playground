import { inject, injectable } from 'inversify';
import { call, put } from 'redux-saga/effects';

import {
  getTodosAsSagaErrorAction,
  getTodosAsSagaSuccessAction
} from '../actions/todos';
import { ITodoApi } from '../apis/interfaces';
import { TYPES } from '../inversify.types';
import { TodoModel } from '../models/todo';

@injectable()
export class TodosSaga {
  public constructor(@inject(TYPES.ITodoApi) private todoApi: ITodoApi) {}

  public *getTodos() {
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
