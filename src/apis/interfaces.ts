import { TodoModel } from '../models/todo';

export interface ITodoApi {
  get(): Promise<TodoModel[]>;
}
