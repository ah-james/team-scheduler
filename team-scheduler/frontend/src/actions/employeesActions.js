export const fetchEmployees = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/employees')
        .then(resp => resp.json())
        .then(json => dispatch({type: "GET_EMPLOYEES", payload: json['data']}))
    }

}