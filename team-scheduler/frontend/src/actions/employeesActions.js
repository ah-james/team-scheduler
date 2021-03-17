export const fetchEmployees = () => {
    fetch('http://localhost:3000/employees')
    .then(resp => resp.json())
    .then(data => console.log(data))
}