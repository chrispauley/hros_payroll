import { combineReducers } from 'redux'

import payrollReducer from './payrollReducer'
import sessionReducer from './sessionReducer'


export default combineReducers({
    payrollReducer,
    sessionReducer
})
