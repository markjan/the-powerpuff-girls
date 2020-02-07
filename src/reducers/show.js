import {combineReducers} from 'redux';
import {LOAD, LOADED} from '../actions/show';

/**
 *
 * @param state
 * @param action
 * @returns {({} & {isLoading: boolean, content: Object, lastUpdated: number)})}
 */
function show(
    state = {
      isLoading: false,
      content: {},
      lastUpdated: null,
    },
    action,
) {
  switch (action.type) {
    case LOAD:
      return Object.assign({}, state, {
        isLoading: true,
        lastUpdated: null,
      });
    case LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        content: action.content,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

// @todo: remove combine.
export default combineReducers({
  show,
});