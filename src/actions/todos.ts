import { action } from 'typesafe-actions';

import { TodoModel } from '../models/todo';

export const ADD_TODO = '[TODOS] Add Todo';
export const TOGGLE_TODO = '[TODOS] Toggle Todo';

export const GET_TODOS = '[TODOS] Get Todos';
export const GET_TODOS_SUCCESS = '[TODOS] Get Todos Success';
export const GET_TODOS_ERROR = '[TODOS] Get Todos Error';

export const GET_TODOS_AS_SAGA = '[TODOS] Get Todos saga';
export const GET_TODOS_AS_SAGA_SUCCESS = '[TODOS] Get Todos saga Success';
export const GET_TODOS_AS_SAGA_ERROR = '[TODOS] Get Todos saga Error';

export const GET_TODOS_AS_EPIC = '[TODOS] Get Todos epic';
export const GET_TODOS_AS_EPIC_SUCCESS = '[TODOS] Get Todos epic Success';
export const GET_TODOS_AS_EPIC_ERROR = '[TODOS] Get Todos epic Error';

export const addTodoAction = (id: number, title: string) =>
  action(ADD_TODO, { id, title });
export const toggleTodoAction = (id: number) => action(TOGGLE_TODO, id);

export const getTodosAction = () => action(GET_TODOS);
export const getTodosSuccessAction = (todos: TodoModel[]) =>
  action(GET_TODOS_SUCCESS, todos);
export const getTodosErrorAction = () => action(GET_TODOS_ERROR);

export const getTodosAsSagaAction = () => action(GET_TODOS_AS_SAGA);
export const getTodosAsSagaSuccessAction = (todos: TodoModel[]) =>
  action(GET_TODOS_AS_SAGA_SUCCESS, todos);
export const getTodosAsSagaErrorAction = () => action(GET_TODOS_AS_SAGA_ERROR);

export const getTodosAsEpicAction = () => action(GET_TODOS_AS_EPIC);
export const getTodosAsEpicSuccessAction = (todos: TodoModel[]) =>
  action(GET_TODOS_AS_EPIC_SUCCESS, todos);
export const getTodosAsEpicErrorAction = () => action(GET_TODOS_AS_EPIC_ERROR);
