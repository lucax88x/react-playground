import { inject, injectable } from 'inversify';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodosActions } from 'src/actions';
import {
  GET_TODOS_AS_EPIC,
  getTodosAsEpicErrorAction,
  getTodosAsEpicSuccessAction
} from 'src/actions/todos';
import { ITodoApi } from 'src/apis/interfaces';
import { TYPES } from 'src/inversify.types';
import { ITodosState } from 'src/states/todos';

@injectable()
export class TodosEpic {
  public constructor(@inject(TYPES.ITodoApi) private todoApi: ITodoApi) {}

  public get epics() {
    return [this.getTodos];
  }

  private getTodos: Epic<TodosActions, TodosActions, ITodosState> = (
    action$,
    state
  ) =>
    action$.ofType(GET_TODOS_AS_EPIC).pipe(
      switchMap(_ =>
        this.todoApi.getAsObservable().pipe(
          map(items => getTodosAsEpicSuccessAction(items)),
          catchError(error => of(getTodosAsEpicErrorAction()))
        )
      )
    );
}
