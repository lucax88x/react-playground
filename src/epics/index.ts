import { combineEpics } from 'redux-observable';
import { container } from 'src/inversify.config';
import { TYPES } from 'src/inversify.types';

import { TodosEpic } from './todos';

const todosEpic = container.get<TodosEpic>(TYPES.TodosEpic);

const epics = combineEpics(...todosEpic.epics);

export default epics;
