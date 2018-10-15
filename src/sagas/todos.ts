import { inject } from 'inversify';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TodosActions } from 'src/actions';
import {
  getTodosAsSagaAction,
  getTodosAsSagaErrorAction,
  getTodosAsSagaSuccessAction
} from 'src/actions/todos';
import { ITodoApi } from 'src/apis/interfaces';
import { TYPES } from 'src/inversify.types';
import { TodoModel } from 'src/models/todo';

export class TodosSaga {
  public constructor(@inject(TYPES.ITodoApi) private todoApi: ITodoApi) {}

  public *sagas() {
    yield takeLatest(getTodosAsSagaAction, this.fetchUser);
  }

  private *fetchUser(action: TodosActions) {
    try {
      const data = yield call<TodoModel[]>(this.todoApi.get);
      yield put(getTodosAsSagaSuccessAction(data));
    } catch (e) {
      yield put(getTodosAsSagaErrorAction());
    }
  }
}
