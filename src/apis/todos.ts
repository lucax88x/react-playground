import axios from 'axios';
import { injectable } from 'inversify';
import { Observable } from 'rxjs';

import { rxios } from '../code/rxios';
import { TodoModel } from '../models/todo';
import { ITodoApi } from './interfaces';

@injectable()
export class TodoApi implements ITodoApi {
  public async get() {
    const result = await axios.get<TodoModel[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
    return result.data;
  }
  public getAsObservable(): Observable<TodoModel[]> {
    return rxios.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
