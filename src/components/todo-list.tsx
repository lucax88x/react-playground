import { map } from 'ramda';
import React from 'react';
import { TodoModel } from 'src/models/todo';

import Todo from './todo';

interface ITodoListPropTypes {
  todos: TodoModel[];
  toggleTodo: (id: number) => void;
}

// try to render using ramda map
export class TodoList extends React.Component<ITodoListPropTypes> {
  public render() {
    return (
      <ul>
        {map(
          todo => (
            <Todo key={todo.id} {...todo} onClick={this.onClick} />
          ),
          this.props.todos
        )}
      </ul>
    );
  }

  private onClick = (id: number) => {
    this.props.toggleTodo(id);
  };
}

export default TodoList;
