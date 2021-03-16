const employeeReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            return { } //destructure state, add in new employee
        case 'GET_EMPLOYEES':
            return { } // see all employees
        default:
            return state
    }
}

export default employeeReducer