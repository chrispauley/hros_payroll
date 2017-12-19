import {
  LOAD_PAYROLL_INSTRUCTION,
  LOAD_PAYROLL_INSTRUCTION_FULFILLED,
  LOAD_PAYROLL_INSTRUCTION_ERROR,
  CLEAR_PAYROLL_INSTRUCTIONS,
  FETCH_PAYROLL_INSTRUCTIONS,
  FETCH_PAYROLL_INSTRUCTIONS_FULFILLED,
  FETCH_PAYROLL_INSTRUCTIONS_ERROR
} from '../actions/payrollActions';

const initialState = {
  items: [],
  offset: 5,
  page: 1,
  processInstance: {},
  loading: false,
  error: null
}

export function payrollReducer(state = initialState, action) {
  console.info('payrollReducer called: ' + action.type);
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
        loading: false,
        error: null
      }
    case LOAD_PAYROLL_INSTRUCTION_ERROR:
      return {
        ...state,
        processInstance: null,
        loading: false,
        error: action.payload
      }
    case FETCH_PAYROLL_INSTRUCTIONS:
      return {
        ...state,
        items: [],
        loading: true,
        error: null
      }
    case FETCH_PAYROLL_INSTRUCTIONS_FULFILLED:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case FETCH_PAYROLL_INSTRUCTIONS_ERROR:
      return {
        ...state,
        items: [],
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default payrollReducer;
