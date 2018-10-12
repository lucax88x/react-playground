import { TodoModel } from '../models/todo';

export class TodosState {
  public isTodosBusy = false;
  public todos: TodoModel[] = [];
}
