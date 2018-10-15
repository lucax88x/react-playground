import axios from 'axios';
import { injectable } from 'inversify';

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
}
