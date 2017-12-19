// sessionReducer is responsible for preferences, UserId, and permissions.
import {
  TOGGLE_PERSONLEGAL,
  TOGGLE_ACCOUNTTYPE,
  TOGGLE_PAYMENTMETHOD,
  TOGGLE_PAYMENTDISTRIBUTION,
  TOGGLE_SHOW_JSON,
  TOGGLE_SHOW_PROPS,
  TOGGLE_SHOW_SESSIONPROPS } from '../actions/sessionActions';

const initialState = {
  user: null,
  user_error: null,

  showJSON: false,
  showNoun: false,
  showProps: false,
  showSessionProps: false,

  show_personLegal: false,
  show_accountType: false,
  show_paymentMethod: false,
  show_paymentDistribution: false
}

export function sessionReducer(state = initialState, action) {
  // console.info('sessionReducer called: ' + action.type);
  switch (action.type) {
    case TOGGLE_SHOW_PROPS:
      return {
        ...state,
        showProps: !state.showProps
      }
    case TOGGLE_SHOW_SESSIONPROPS:
      return {
        ...state,
        showSessionProps: !state.showSessionProps
      }
    case TOGGLE_SHOW_JSON:
      return {
        ...state,
        showJSON: !state.showJSON
      }

    default:
      return state;
  }
}

export default sessionReducer;
