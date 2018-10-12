import axios from 'axios';

import { TodoModel } from '../models/todo';

export async function callGetTodos() {
  return await axios.get<TodoModel[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );
}
