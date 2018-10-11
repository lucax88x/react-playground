import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { TodosActions } from '../actions';
import { addTodo } from '../actions/todos';
import { AddTodo } from '../components/add-todo';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<TodosActions>) => ({
  addTodo: (value: string) => dispatch(addTodo(0, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
