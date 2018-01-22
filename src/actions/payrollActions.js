export const LOAD_PAYROLL_INSTRUCTION = 'LOAD_PAYROLL_INSTRUCTION';
export const LOAD_PAYROLL_INSTRUCTION_FULFILLED = 'LOAD_PAYROLL_INSTRUCTION_FULFILLED';
export const LOAD_PAYROLL_INSTRUCTION_ERROR = 'LOAD_PAYROLL_INSTRUCTION_ERROR';
export const CLEAR_PAYROLL_INSTRUCTION = 'CLEAR_PAYROLL_INSTRUCTION';
export const FETCH_SAMPLE_LIST = 'FETCH_SAMPLE_LIST';
export const FETCH_SAMPLE_LIST_FULFILLED = 'FETCH_SAMPLE_LIST_FULFILLED';
export const FETCH_SAMPLE_LIST_ERROR = 'FETCH_SAMPLE_LIST_ERROR';

// import {LOAD_PAYROLL_INSTRUCTION, CLEAR_PAYROLL_INSTRUCTIONS, FETCH_SAMPLE_LIST, FETCH_SAMPLE_LIST_FULFILLED} from '../actions/payrollActions';
// import { loadPayrollInstruction, fetchPayrollInstructions } from '../actions/payrollActions';
//handleDropFileInput

export function loadPayrollInstruction() {
  return {type: LOAD_PAYROLL_INSTRUCTION}
}

export function clear() {
  return {type: CLEAR_PAYROLL_INSTRUCTION}
}

export function fetchPayrollInstructions() {
  return {type: FETCH_SAMPLE_LIST, payload: count}
}

export function getSampleList (url, offset = 5, page = 1) {
  // console.log(`getSampleList(${url},${offset},${page})`);
  return (dispatch) => {
    // Fetch local data
    var that = this;
    var result = [];

    dispatch({type: FETCH_SAMPLE_LIST});

    fetch(url, {method: 'get'}).then(function(response) {
      return response.json();
    }).then(function(j) {
      j.forEach((item) => {
        result.push({name: item.displayName, link: item.publicPath});
      })
    }).then(function() {
      dispatch({type: FETCH_SAMPLE_LIST_FULFILLED, payload: result})
    }).catch(function(err) {
      // Error :(
      console.log(err);
      dispatch({type: FETCH_SAMPLE_LIST_ERROR,
        payload: {error: 'Could not load.'}})

    });
  }
}

export function fetchPayrollInstructionsFulfilledAction(instructions) {
  return {type: FETCH_SAMPLE_LIST_FULFILLED, payload: instructions}
}

export function fetchPayrollInstructionsError(error) {
  return {type: FETCH_SAMPLE_LIST_ERROR, payload: error}
}


// This loads an instance.
export function getPayrollInstructionInstance(url) {
  // console.log('url: ', url);
  return (dispatch) => {
    dispatch({type: LOAD_PAYROLL_INSTRUCTION});
    fetch(url)
       .then((res) => res.json()
       .then((resData) => {
          const { payrollProcess } = resData;
          if ( payrollProcess ) {
            var result = payrollProcess;
          } else {
            result = resData;
          }
          dispatch({type: LOAD_PAYROLL_INSTRUCTION_FULFILLED,
          payload: result});
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
