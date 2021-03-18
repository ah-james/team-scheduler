import { combineReducers } from 'redux'
import employeeReducer from './employeeReducer'
import positionReducer from './positionReducer'
import titleReducer from './titleReducer'

export const rootReducer = combineReducers({
    employees: employeeReducer,
    positions: positionReducer,
    titles: titleReducer
})