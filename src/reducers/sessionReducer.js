// sessionReducer is responsible for preferences, UserId, and permissions.
import {
  TOGGLE_ACCOUNTTYPE,
  TOGGLE_PAYMENTMETHOD,
  TOGGLE_SHOW_JSON,
  TOGGLE_SHOW_PROPS,
  TOGGLE_SHOW_SESSIONPROPS,
  TOGGLE_SHOW_SCHEMA,

  TOGGLE_SHOW_NOUN,
  TOGGLE_PAYEE,
  TOGGLE_SHOW_DEPLOYMENT,
  TOGGLE_PAYMENT_INSTRUCTIONS,
  TOGGLE_SHOW_TAX,
  TOGGLE_SHOW_BENEFITS,
  TOGGLE_SHOW_GARNISHMENTS,
  TOGGLE_GENERAL_INSTRUCTIONS
} from '../actions/sessionActions';

const initialState = {
  user: null,
  user_error: null,

  showJSON: false,
  showProps: false,
  showSessionProps: false,
  showSchema: false,

  show_personLegal: false,
  show_accountType: false,
  show_paymentMethod: false,

  showNoun: false,
  showPayee: false,
  showDeployment: false,
  showPaymentInstructions: false,
  showTax: false,
  showBenefits: false,
  showGarnishments: false,
  showGeneralIntructions: false
}

export function sessionReducer(state = initialState, action) {
  // console.info('sessionReducer called: ' + action.type);
  switch (action.type) {
    case TOGGLE_SHOW_NOUN:
      return {
        ...state,
        showNoun: !state.showNoun
      }
    case TOGGLE_PAYEE:
      return {
        ...state,
        showPayee: !state.showPayee
      }
    case TOGGLE_SHOW_DEPLOYMENT:
      return {
        ...state,
        showDeployment: !state.showDeployment
      }
    case TOGGLE_PAYMENT_INSTRUCTIONS:
      return {
        ...state,
        showPaymentInstructions: !state.showPaymentInstructions
      }
    case TOGGLE_SHOW_TAX:
      return {
        ...state,
        showTax: !state.showTax
      }
    case TOGGLE_SHOW_BENEFITS:
      return {
        ...state,
        showBenefits: !state.showBenefits
      }
    case TOGGLE_SHOW_GARNISHMENTS:
      return {
        ...state,
        showBenefits: !state.showBenefits
      }
    case TOGGLE_GENERAL_INSTRUCTIONS:
      return {
        ...state,
        showGeneralIntructions: !state.showGeneralIntructions
      }
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
    case TOGGLE_SHOW_SCHEMA:
      return {
        ...state,
        showSchema: !state.showSchema
      }
    default:
      return state;
  }
}

export default sessionReducer;
