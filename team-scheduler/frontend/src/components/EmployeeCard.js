import React from 'react'

class EmployeeCard extends React.Component {

    render() { 
        return(
            <div class="col-md-3">
                <h2>{props.employee.attributes.name}</h2>
                <img src={props.employee.attributes.image} alt="employee" />
                <p>Experience: {props.employee.attributes.years} Years</p>
                <p>Employee of the Month: {props.employee.attributes.awards}</p>
                <button name="delete" onClick={() => props.delete(props.employee.id)}>Fire</button>
                <button name="edit" onClick={() => props.handleEdit(props.employee)}>Edit</button>
                <button name='award' onClick={() => props.addAward(props.employee)}>Award</button>
            </div>
        )
    }
}

export default EmployeeCard