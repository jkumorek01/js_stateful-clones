'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const elements = [];
  let newState = { ...state };

  for (const action of actions) {
    newState = {...newState};
    const {type, extraData, keysToRemove } = action;

    if (type === 'addProperties') {
      Object.assign(newState, extraData);
    } else if (type === 'removeProperties') {
      for (const del of keysToRemove) {
        delete newState[del];
      }
    } else if (type === 'clear') {
        newState = {};
    }

    elements.push({...newState});
  }

  return elements;
}

module.exports = transformStateWithClones;
