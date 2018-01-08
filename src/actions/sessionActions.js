export const LOAD_SESSION_STATE = 'LOAD_SESSION_STATE';
export const SAVE_SESSION_STATE = 'SAVE_SESSION_STATE';
export const TOGGLE_ACCOUNTTYPE = 'TOGGLE_ACCOUNTTYPE';
export const TOGGLE_PAYMENTMETHOD = 'TOGGLE_PAYMENTMETHOD';
export const TOGGLE_SHOW_JSON = 'TOGGLE_SHOW_JSON';
export const TOGGLE_SHOW_PROPS = 'TOGGLE_SHOW_PROPS';
export const TOGGLE_SHOW_SESSIONPROPS = 'TOGGLE_SHOW_SESSIONPROPS';

export const TOGGLE_SHOW_NOUN = 'TOGGLE_SHOW_NOUN';
export const TOGGLE_PAYEE = 'TOGGLE_PAYEE';
export const TOGGLE_SHOW_DEPLOYMENT = 'TOGGLE_SHOW_DEPLOYMENT';
export const TOGGLE_PAYMENT_INSTRUCTIONS = 'TOGGLE_PAYMENT_INSTRUCTIONS';
export const TOGGLE_SHOW_TAX = 'TOGGLE_SHOW_TAX';
export const TOGGLE_SHOW_BENEFITS = 'TOGGLE_SHOW_BENEFITS';
export const TOGGLE_SHOW_GARNISHMENTS = 'TOGGLE_SHOW_GARNISHMENTS';
export const TOGGLE_GENERAL_INSTRUCTIONS = 'TOGGLE_GENERAL_INSTRUCTIONS';

export const loadState = () => {
  try {
    const sessionState = localStorage.getItem('sessionState');
    if (sessionState === null) {
      return undefined;
    }
    return JSON.parse(sessionState);
  } catch (err) {
    return undefined;
  }
}
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('sessionState', serializedState);
  } catch (err) {
    console.error('Unable to save sessionState to localStorage.');
  }
}

export function toggle_showNoun() {
  return {type: TOGGLE_SHOW_NOUN}
}
export function toggle_payee() {
  return {type: TOGGLE_PAYEE}
}
export function toggle_showDeployment() {
  return {type: TOGGLE_SHOW_DEPLOYMENT}
}
export function toggle_showTax() {
  return {type: TOGGLE_SHOW_TAX}
}
export function toggle_showBenefits() {
  return {type: TOGGLE_SHOW_BENEFITS}
}
export function toggle_showGarnishments() {
  return {type: TOGGLE_SHOW_GARNISHMENTS}
}
export function toggle_showGeneralInstructions() {
  return {type: TOGGLE_GENERAL_INSTRUCTIONS}
}

export function toggle_accountType() {
  return {type: TOGGLE_ACCOUNTTYPE}
}

export function toggle_paymentMethod() {
  return {type: TOGGLE_PAYMENTMETHOD}
}

export function toggle_paymentInstructions() {
  return {type: TOGGLE_PAYMENT_INSTRUCTIONS}
}

export function toggle_showJson() {
  return {type: TOGGLE_SHOW_JSON}
}
export function toggle_showProps() {
  return {type: TOGGLE_SHOW_PROPS}
}
export function toggle_showSessionProps() {
  return {type: TOGGLE_SHOW_SESSIONPROPS}
}
export function toggle_showSchema() {
  return {type: TOGGLE_SHOW_SCHEMA}
}

export function toggleShowJSON() {
  return (dispatch) => {
    dispatch({type: TOGGLE_SHOW_JSON})
  }
}
