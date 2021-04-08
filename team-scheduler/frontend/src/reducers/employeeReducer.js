const employeeReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_EMPLOYEES':
            return action.payload
        case 'ADD_EMPLOYEE':
            return [...state, action.payload]
        case 'DELETE_EMPLOYEE':
            return [...state.filter(employee => employee.id !== action.payload.id)]
        case 'EDIT_EMPLOYEE':
            const index = state.findIndex(employee => action.payload.id === employee.id)
            return [...state.slice(0, index), action.payload, ...state.slice(index + 1)]
            // return [...state.filter(employee => employee.id !== action.payload.id), action.payload]
        default:
            return state
    }
}

export default employeeReducer