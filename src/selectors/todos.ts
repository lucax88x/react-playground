import { createSelector } from 'reselect';

import { State } from '../states/state';

// reselect?
const getTodos = (state: State) => state.todos;
export const getTodoItems = createSelector(getTodos, todos => todos.todoItems);
