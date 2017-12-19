export const LOAD_PAYROLL_INSTRUCTION = 'LOAD_PAYROLL_INSTRUCTION';
export const LOAD_PAYROLL_INSTRUCTION_FULFILLED = 'LOAD_PAYROLL_INSTRUCTION_FULFILLED';
export const LOAD_PAYROLL_INSTRUCTION_ERROR = 'LOAD_PAYROLL_INSTRUCTION_ERROR';
export const CLEAR_PAYROLL_INSTRUCTION = 'CLEAR_PAYROLL_INSTRUCTION';
export const FETCH_PAYROLL_INSTRUCTIONS = 'FETCH_PAYROLL_INSTRUCTIONS';
export const FETCH_PAYROLL_INSTRUCTIONS_FULFILLED = 'FETCH_PAYROLL_INSTRUCTIONS_FULFILLED';
export const FETCH_PAYROLL_INSTRUCTIONS_ERROR = 'FETCH_PAYROLL_INSTRUCTIONS_ERROR';

// import {LOAD_PAYROLL_INSTRUCTION, CLEAR_PAYROLL_INSTRUCTIONS, FETCH_PAYROLL_INSTRUCTIONS, FETCH_PAYROLL_INSTRUCTIONS_FULFILLED} from '../actions/payrollActions';
// import { loadPayrollInstruction, fetchPayrollInstructions } from '../actions/payrollActions';
//handleDropFileInput

export function loadPayrollInstruction() {
  return {type: LOAD_PAYROLL_INSTRUCTION}
}

export function clear() {
  return {type: CLEAR_PAYROLL_INSTRUCTION}
}

export function fetchPayrollInstructions() {
  return {type: FETCH_PAYROLL_INSTRUCTIONS, payload: count}
}

export function getPayrollInstructions (url, offset = 5, page = 1) {
  // console.log(`getPayrollInstructions(${url},${offset},${page})`);
  return (dispatch) => {
    // Fetch local data
    var that = this;
    var result = [];

    dispatch({type: FETCH_PAYROLL_INSTRUCTIONS});

    fetch(url, {method: 'get'}).then(function(response) {
      return response.json();
    }).then(function(j) {
      j.forEach((item) => {
        result.push({name: item.displayName, link: item.publicPath});
      })
    }).then(function() {
      dispatch({type: FETCH_PAYROLL_INSTRUCTIONS_FULFILLED, payload: result})
    }).catch(function(err) {
      // Error :(
      console.log(err);
      dispatch({type: FETCH_PAYROLL_INSTRUCTIONS_ERROR,
        payload: {error: 'Could not load.'}})

    });
  }
}

export function fetchPayrollInstructionsFulfilledAction(instructions) {
  return {type: FETCH_PAYROLL_INSTRUCTIONS_FULFILLED, payload: instructions}
}

export function fetchPayrollInstructionsError(error) {
  return {type: FETCH_PAYROLL_INSTRUCTIONS_ERROR, payload: error}
}

export function getPayrollInstructionInstance(url) {
  console.log('url: ', url);
  return (dispatch) => {
    dispatch({type: LOAD_PAYROLL_INSTRUCTION});
    fetch(url)
       .then((res) => res.json()
       .then((resData) => {
          dispatch({type: LOAD_PAYROLL_INSTRUCTION_FULFILLED,
          payload: resData});
          // this.setState({ processInstance: resData });
        })
        .catch(function(err) {
          // Error :(
          console.log(err);
          dispatch({type: LOAD_PAYROLL_INSTRUCTION_ERROR,
            payload: {error: 'Could not load.'}})
        })
      );
  }
}
