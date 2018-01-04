import { combineReducers } from 'redux'

import payrollReducer from './payrollReducer'
import sessionReducer from './sessionReducer'
import validatorReducer from './validatorReducer'

export default combineReducers({
    payrollReducer,
    sessionReducer, 
    validatorReducer
})
