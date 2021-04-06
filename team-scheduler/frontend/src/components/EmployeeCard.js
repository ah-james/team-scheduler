import React from 'react'

const EmployeeCard = (props) => {
    return(
        <div class="col-md-3">
            <h2>{props.employee.attributes.name}</h2>
            <img src={props.employee.attributes.image} alt="employee" />
            <p>Experience: {props.employee.attributes.years} Years</p>
            <p>Upvotes: {props.upvote}</p>
            <button name="delete" onClick={() => props.delete(props.employee.id)}>Fire</button>
            <button name="edit" onClick={() => props.handleEdit(props.employee)}>Edit</button>
            <button name='upvote' onClick={() => props.addUpvote()}>Upvote</button>
        </div>
    )
}

export default EmployeeCard