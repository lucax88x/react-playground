import React from 'react';

interface ITodoPropTypes {
  onClick: (id: number) => void;
  id: number;
  completed: boolean;
  text: string;
}

export class Todo extends React.Component<ITodoPropTypes> {
  public render() {
    return (
      <li
        onClick={this.handleOnClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    );
  }

  private handleOnClick() {
    this.props.onClick(this.props.id);
  }
}
export default Todo;
