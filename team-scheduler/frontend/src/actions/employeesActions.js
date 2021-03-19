export const fetchEmployees = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/employees')
        .then(resp => resp.json())
        .then(json => dispatch({type: "GET_EMPLOYEES", payload: json['data']}))
    }
}

export const addEmployee = employee => {
    return (dispatch) => {
        fetch('http://localhost:3000/employees', {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: "ADD_EMPLOYEES", payload: json}))
    }
}

export const deleteEmployee = employee => {
    return (dispatch) => {
        const configObj = {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        fetch(`http://localhost:3000/employees/${employee}`, configObj)
        .then(resp => resp.json())
        .then(json => dispatch({type: "DELETE_EMPLOYEE", payload: json}))
    }
}