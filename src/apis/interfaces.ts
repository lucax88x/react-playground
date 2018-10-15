import { TodoModel } from 'src/models/todo';

export interface ITodoApi {
  get(): Promise<TodoModel[]>;
}
