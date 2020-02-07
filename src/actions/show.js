import {POWER_PUFF_URL} from '../constants';

export const LOAD = 'LOAD';
export const LOADED = 'LOADED';

function load() {
  return {
    type: LOAD,
  };
}

/**
 * @param data: Object
 * @returns {{receivedAt: number, type: string, content: *}}
 */
function loaded(data) {
  return {
    content: data, // @todo fix this
    receivedAt: Date.now(),
    type: LOADED,
  };
}

export function fetchShow(dispatch) {
  dispatch(load());
  return fetch(POWER_PUFF_URL)
      .then(response => response.json())
      .then(json => dispatch(loaded(json)));
  /** Skipping error handling and validation. */
}

