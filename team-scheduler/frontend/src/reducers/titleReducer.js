const titleReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_TITLES':
            return action.payload
        default:
            return state
    }
}

export default titleReducer