import React, { FormEvent } from 'react';

interface IAddTodoPropTypes {
  addTodo: (value: string) => void;
}

// better way to ref the node?
export class AddTodo extends React.Component<IAddTodoPropTypes> {
  private input: HTMLInputElement | null;

  public render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={node => (this.input = node)} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }

  public onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!!this.input) {
      this.props.addTodo(this.input.value);
    }
  };
}

export default AddTodo;
