const employeeReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_EMPLOYEES':
            return action.payload
        case 'ADD_EMPLOYEE':
            return [...state, action.payload]
        case 'DELETE_EMPLOYEE':
            return [...state.filter(employee => employee !== action.payload)]
        case 'EDIT_EMPLOYEE':
            return [...state.filter(employee => employee !== action.payload)]
        default:
            return state
    }
}

export default employeeReducer