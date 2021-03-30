const titleReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_TITLES':
            return action.payload
        case 'ADD_TITLE':
            return [...state, action.payload]
        case 'DELETE_TITLE':
            return [...state.filter(title => title !== action.payload)]
        default:
            return state
    }
}

export default titleReducer