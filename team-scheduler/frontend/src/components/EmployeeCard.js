import React from 'react'

const EmployeeCard = (props) => {
    return(
        <div>
            <h2>{props.employee.attributes.name}</h2>
            <img src={props.employee.attributes.image} />
            <p>Experience: {props.employee.attributes.years} Years</p>
            <button name="delete" onClick={() => props.delete(props.employee.id)}>Delete</button>
        </div>
    )
}

export default EmployeeCard