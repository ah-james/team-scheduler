export const fetchTitles = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/titles')
        .then(resp => resp.json())
        .then(json => dispatch({type: "GET_TITLES", payload: json['data']}))
    }
}

export const createTitle = title => {
    return (dispatch) => {
        fetch('http://localhost:3000/titles', {
            method: 'POST',
            body: JSON.stringify(title),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'ADD_TITLE', payload: json['data']}))
    }
}

export const deleteTitle = employee => {
    return (dispatch) => {
        fetch(`http://localhost:3000/titles/${employee.id}`, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(json => dispatch({ type: 'DELETE_TITLE', payload: json['data']}))
    }
}