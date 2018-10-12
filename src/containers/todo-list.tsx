import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { TodosActions } from '../actions';
import { toggleTodoAction } from '../actions/todos';
import {
  ITodoListDispatches,
  ITodoListProps,
  TodoList
} from '../components/todo-list';
import { selectIsTodosBusy, selectTodos } from '../selectors/todos';
import { State } from '../states/state';
import { ITodosState } from '../states/todos';
import { getTodos } from '../thunks/todos';

const mapStateToProps = (state: State): ITodoListProps => ({
  isBusy: selectIsTodosBusy(state),
  todos: selectTodos(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<ITodosState, null, TodosActions>
): ITodoListDispatches => ({
  getTodos: () => dispatch(getTodos()),
  toggleTodo: (id: number) => dispatch(toggleTodoAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
