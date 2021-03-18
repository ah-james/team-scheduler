export const fetchTitles = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/titles')
        .then(resp => resp.json())
        .then(json => dispatch({type: "GET_TITLES", payload: json['data']}))
    }
}