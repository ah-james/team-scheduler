// export const fetchTitles = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/titles')
//         .then(resp => resp.json())
//         .then(json => dispatch({type: "GET_TITLES", payload: json['data']}))
//     }
// }

export const fetchTitles = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3000/titles')
            
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            let json = await response.json()
            dispatch({type: "GET_TITLES", payload: json['data']})
        } catch (error) {
            throw error
        }
    }
}

// export const createTitle = title => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/titles', {
//             method: 'POST',
//             body: JSON.stringify(title),
//             headers: {'Content-Type': 'application/json'}
//         })
//         .then(resp => resp.json())
//         .then(json => dispatch({type: 'ADD_TITLE', payload: json['data']}))
//     }
// }

export const createTitle = (title_name, description) => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3000/titles', {
                method: 'POST',
                body: JSON.stringify({title_name, description}),
                headers: {'Content-Type': 'application/json'}
            })

            if (!response.ok) {
                throw new Error('Something Went Wrong!')
            }

            let json = await response.json()
            dispatch({type: 'ADD_TITLE', payload: json['data']})

        } catch (error) {
            throw error
        }
    }
}

// export const deleteTitle = employee => {
//     return (dispatch) => {
//         fetch(`http://localhost:3000/titles/${employee}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             }
//         })
//         .then(resp => resp.json())
//         .then(json => dispatch({ type: 'DELETE_TITLE', payload: json}))
//     }
// }

export const deleteTitle = title => {
    return async dispatch => {
        try {
            let response = await fetch(`http://localhost:3000/titles/${title}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

            if (!response.ok) {
                throw new Error('Something Went Wrong!')
            }

            let json = await response.json()
            dispatch({ type: 'DELETE_TITLE', payload: json})

        } catch (error) {
            throw error
        }
    }
}