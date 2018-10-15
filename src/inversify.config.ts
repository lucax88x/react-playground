import 'reflect-metadata';

import { Container } from 'inversify';

import { ITodoApi } from './apis/interfaces';
import { TodoApi } from './apis/todos';
import { TYPES } from './inversify.types';
import { TodosThunks } from './thunks/todos';

const container = new Container();

container.bind<TodosThunks>(TYPES.TodosThunks).to(TodosThunks);
container.bind<ITodoApi>(TYPES.ITodoApi).to(TodoApi);

export { container };
