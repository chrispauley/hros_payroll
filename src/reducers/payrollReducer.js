// payrollReducer is responsible for the data
import {
  LOAD_PAYROLL_INSTRUCTION,
  LOAD_PAYROLL_INSTRUCTION_FULFILLED,
  LOAD_PAYROLL_INSTRUCTION_ERROR,
  CLEAR_PAYROLL_INSTRUCTIONS,
  FETCH_SAMPLE_LIST,
  FETCH_SAMPLE_LIST_FULFILLED,
  FETCH_SAMPLE_LIST_ERROR
} from '../actions/payrollActions';

import {
  SELECT_DEPLOYMENTS_FIRST,
  SELECT_DEPLOYMENTS_NEXT,
  SELECT_DEPLOYMENTS_PREVIOUS,
  SELECT_DEPLOYMENTS_LAST,
  SELECT_DEPLOYMENTS_BY_ID
} from '../actions/payrollDeploymentActions';

const initialState = {
  items: [],
  offset: 5,
  page: 1,
  processInstance: {},

  deductionInstructionsArrayOffset: 0,
  benefitsArrayOffset: 0,
  generalDeductionArrayOffset: 0,
  garnishmentArrayOffset: 0,

  deploymentArrayOffset: 0,
  deploymentPage: 1,

  paymentArrayOffset: 0,
  paymentPage: 1,

  taxArrayOffset: 0,
  taxPage: 1,

  loading: false,
  error: null
}

export function payrollReducer(state = initialState, action) {
  console.info('payrollReducer called: ' + action.type);
  let deploymentIndex, newPage = 1;

  switch (action.type) {
    case LOAD_PAYROLL_INSTRUCTION:
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOAD_PAYROLL_INSTRUCTION_FULFILLED:
      return {
        ...state,
        processInstance: action.payload,
        deploymentPage: 1,
        deploymentArrayOffset: 0,
        loading: false,
        error: null
      }
    case LOAD_PAYROLL_INSTRUCTION_ERROR:
    console.log('LOAD_PAYROLL_INSTRUCTION_ERROR:', action.payload);
      return {
        ...state,
        processInstance: null,
        loading: false,
        error: action.payload
      }
    case FETCH_SAMPLE_LIST:
      return {
        ...state,
        items: [],
        loading: true,
        error: null
      }
    case FETCH_SAMPLE_LIST_FULFILLED:
    // console.log('FETCH_SAMPLE_LIST_FULFILLED', action.payload);
      return {
        ...state,
        items: action.payload,
        loading: false
      }

    case FETCH_SAMPLE_LIST_ERROR:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload
      }

    case SELECT_DEPLOYMENTS_FIRST:
      newPage = 1;
      profileIndex = 0;
      return {
        ...state,
        deploymentPage: newPage,
        deployment: state.processInstance.payrollDeployments[deploymentIndex]
      };
    case SELECT_DEPLOYMENTS_NEXT:
      if(state.processInstance >= state.deploymentList.length) {
          newPage = state.deploymentList.length;
          deploymentIndex = newPage -1;
      } else {
        newPage = state.deploymentPage + 1;
        deploymentIndex = newPage -1;
      }
      return {
        ...state,
        deploymentPage: newPage
        // deployment: state.processInstance.payrollDeployments[deploymentIndex]
      };
    case SELECT_DEPLOYMENTS_PREVIOUS:
      if ( state.deploymentPage = 1 ) {
        newPage = 1;
        deploymentIndex = newPage -1;
      } else {
        newPage = state.deploymentPage - 1;
        deploymentIndex = newPage -1;
      }

      return {
        ...state,
        deploymentPage: newPage
      }
    case SELECT_DEPLOYMENTS_LAST:
      newPage = state.deploymentList.length;
      deploymentIndex = newPage -1
      return {
        ...state,
        deploymentPage: newPage
      }
    case SELECT_DEPLOYMENTS_BY_ID:
      console.log('TODO: reducer for SELECT_DEPLOYMENTS_BY_ID');
      return {
        ...state
      }


    default:
      return state;
  }
}

export default payrollReducer;
