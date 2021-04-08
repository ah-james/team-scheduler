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
        .then(json => dispatch({type: "ADD_EMPLOYEE", payload: json['data']}))
    }
}

export const deleteEmployee = employee => {
    return (dispatch) => {
        fetch(`http://localhost:3000/employees/${employee}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: "DELETE_EMPLOYEE", payload: json}))
    }
}

export const editEmployee = employee => {
    return (dispatch) => {
        fetch(`http://localhost:3000/employees/${employee.id}`, {
        method: 'PATCH',
        body: JSON.stringify(employee),
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'EDIT_EMPLOYEE', payload: json['data']}))
    }
}

export const increaseAward = employee => {
    return (dispatch) => {
        fetch(`http://localhost:3000/employees/${employee.id}`, {
        method: 'PATCH',
        body: JSON.stringify({awards: employee.attributes.awards + 1}),
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(resp => resp.json())
        .then(json => dispatch({type: 'EDIT_EMPLOYEE', payload: json['data']}))
    }
}