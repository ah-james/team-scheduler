export const fetchPositions = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/positions')
        .then(resp => resp.json())
        .then(json => dispatch({type: "GET_POSITIONS", payload: json['data']}))
    }
}