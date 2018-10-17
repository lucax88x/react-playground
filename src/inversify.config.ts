import 'reflect-metadata';

import { Container } from 'inversify';

import { ITodoApi } from './apis/interfaces';
import { TodoApi } from './apis/todos';
import { TodosEpic } from './epics/todos';
import { TYPES } from './inversify.types';
import { TodosSaga } from './sagas/todos';
import { TodosThunks } from './thunks/todos';

const container = new Container();

container.bind<ITodoApi>(TYPES.ITodoApi).to(TodoApi);
container.bind<TodosSaga>(TYPES.TodosSaga).to(TodosSaga);
container.bind<TodosThunks>(TYPES.TodosThunks).to(TodosThunks);
container.bind<TodosEpic>(TYPES.TodosEpic).to(TodosEpic);

export { container };
