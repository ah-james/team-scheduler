import { combineReducers } from 'redux'
import employeeReducer from './employeeReducer'
import titleReducer from './titleReducer'

export const rootReducer = combineReducers({
    employees: employeeReducer,
    titles: titleReducer
})