import { addTodo, toggleTodo } from './todos';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(addTodo(0, 'Use Redux')).toEqual({
      id: 0,
      text: 'Use Redux',
      type: 'ADD_TODO'
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(toggleTodo(1)).toEqual({
      id: 1,
      type: 'TOGGLE_TODO'
    });
  });
});
