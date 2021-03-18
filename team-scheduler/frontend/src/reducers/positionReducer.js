const positionReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_POSITIONS':
            return action.payload
        default:
            return state
    }
}

export default positionReducer