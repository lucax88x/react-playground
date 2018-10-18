import { forEachObjIndexed } from 'ramda';

import { ITodoApi } from './apis/interfaces';
import { TodosEpic } from './epics/todos';
import { container } from './inversify.config';
import { TYPES } from './inversify.types';
import { TodosSaga } from './sagas/todos';

describe('Inversify Container', () => {
  it('resolve ALL the types in case you forgot some', () => {
    forEachObjIndexed(
      type => expect(container.get(type)).not.toBeNull(),
      TYPES
    );
  });
  it('resolve ITodoApi', () => {
    expect(container.get<ITodoApi>(TYPES.ITodoApi)).not.toBeNull();
  });
  it('resolve TodosSaga', () => {
    expect(container.get<TodosSaga>(TYPES.TodosSaga)).not.toBeNull();
  });
  it('resolve TodosThunks', () => {
    expect(container.get<TodosSaga>(TYPES.TodosThunks)).not.toBeNull();
  });
  it('resolve TodosEpic', () => {
    expect(container.get<TodosEpic>(TYPES.TodosEpic)).not.toBeNull();
  });
});
