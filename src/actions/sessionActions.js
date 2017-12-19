export const TOGGLE_PERSONLEGAL = 'TOGGLE_PERSONLEGAL';
export const TOGGLE_ACCOUNTTYPE = 'TOGGLE_ACCOUNTTYPE';
export const TOGGLE_PAYMENTMETHOD = 'TOGGLE_PAYMENTMETHOD';
export const TOGGLE_PAYMENTDISTRIBUTION = 'TOGGLE_PAYMENTDISTRIBUTION';
export const TOGGLE_SHOW_JSON = 'TOGGLE_SHOW_JSON';
export const TOGGLE_SHOW_PROPS = 'TOGGLE_SHOW_PROPS';
export const TOGGLE_SHOW_SESSIONPROPS = 'TOGGLE_SHOW_SESSIONPROPS';

export function toggle_personlegal() {
  return {type: TOGGLE_PERSONLEGAL}
}

export function toggle_accountType() {
  return {type: TOGGLE_ACCOUNTTYPE}
}

export function toggle_paymentMethod() {
  return {type: TOGGLE_PAYMENTMETHOD}
}

export function toggle_paymentDistribution() {
  return {type: TOGGLE_PAYMENTDISTRIBUTION}
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
