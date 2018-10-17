import { find } from 'ramda';
import { Action } from 'redux';
import { MockStore } from 'redux-mock-store';

const findActionByType = (id: string) => find<Action>(a => a.type === id);

export function getThunkAction<S, A extends Action>(
  store: MockStore<S, A>,
  type: string
): Promise<Action> {
  let action = findActionByType(type)(store.getActions());

  if (action) {
    return Promise.resolve(action);
  }

  return new Promise(resolve => {
    store.subscribe(() => {
      action = findActionByType(type)(store.getActions());
      if (action) {
        resolve(action);
      }
    });
  });
}
