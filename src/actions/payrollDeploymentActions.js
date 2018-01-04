SELECT_DEPLOYMENTS_FIRST,
SELECT_DEPLOYMENTS_NEXT,
SELECT_DEPLOYMENTS_PREVIOUS,
SELECT_DEPLOYMENTS_LAST,
SELECT_DEPLOYMENTS_BY_ID

export const SELECT_DEPLOYMENTS_FIRST = 'SELECT_DEPLOYMENTS_FIRST';
export const SELECT_DEPLOYMENTS_NEXT = 'SELECT_DEPLOYMENTS_NEXT';
export const SELECT_DEPLOYMENTS_PREVIOUS = 'SELECT_DEPLOYMENTS_PREVIOUS';
export const SELECT_DEPLOYMENTS_LAST = 'SELECT_DEPLOYMENTS_LAST';
export const SELECT_DEPLOYMENTS_BY_ID = 'SELECT_DEPLOYMENTS_BY_ID';

export function selectDeploymentsFirst() {
  return {type: SELECT_DEPLOYMENTS_FIRST}
}
export function selectDeploymentsNext() {
  return {type: SELECT_DEPLOYMENTS_NEXT}
}
export function selectDeploymentsPrevious() {
  return {type: SELECT_DEPLOYMENTS_PREVIOUS}
}
export function selectDeploymentsLast() {
  return {type: SELECT_DEPLOYMENTS_LAST}
}
export function selectDeploymentsById(id = 1) {
  return {type: SELECT_DEPLOYMENTS_BY_ID}
}

//import {selectDeploymentsFirst, selectDeploymentsNext, selectDeploymentsPrevious, selectDeploymentsLast, selectDeploymentsById} from '../actions/payrollDeploymentActions';
