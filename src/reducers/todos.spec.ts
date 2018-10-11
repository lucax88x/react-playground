import { addTodo, toggleTodo } from '../actions/todos';
import todos from './todos';

describe('todos reducer', () => {
  //   it('should handle initial state', () => {
  //     expect(todos(undefined, {})).toEqual([]);
  //   });

  it('should handle ADD_TODO', () => {
    expect(todos({ todoItems: [] }, addTodo(0, 'Run the tests'))).toEqual([
      {
        completed: false,
        id: 0,
        text: 'Run the tests'
      }
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        {
          todoItems: [
            {
              completed: false,
              id: 1,
              text: 'Run the tests'
            },
            {
              completed: false,
              id: 0,
              text: 'Use Redux'
            }
          ]
        },
        toggleTodo(1)
      )
    ).toEqual([
      {
        completed: true,
        id: 1,
        text: 'Run the tests'
      },
      {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ]);
  });
});
