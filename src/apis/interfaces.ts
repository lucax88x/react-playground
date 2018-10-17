import { Observable } from 'rxjs';

import { TodoModel } from '../models/todo';

export interface ITodoApi {
  get(): Promise<TodoModel[]>;
  getAsObservable(): Observable<TodoModel[]>;
}
