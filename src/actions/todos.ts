import { action } from 'typesafe-actions';

export const ADD_TODO = '[TODOS] Add Todo';
export const TOGGLE_TODO = '[TODOS] Toggle Todo';

export const addTodo = (id: number, text: string) =>
  action(ADD_TODO, { id, text });
export const toggleTodo = (id: number) => action(TOGGLE_TODO, id);
