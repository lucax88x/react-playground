import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { TodosActions } from '../actions';
import { toggleTodo } from '../actions/todos';
import TodoList from '../components/todo-list';
import { getTodoItems } from '../selectors/todos';
import { State } from '../states/state';

const mapStateToProps = (state: State) => ({
  todos: getTodoItems(state)
});

const mapDispatchToProps = (dispatch: Dispatch<TodosActions>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
