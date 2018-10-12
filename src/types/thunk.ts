import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type Thunk<A extends Action<any>, S> = ActionCreator<
  ThunkAction<Promise<A>, S, null, A>
>;
