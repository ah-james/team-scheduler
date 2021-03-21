import React from 'react'

const EmployeeCard = (props) => {
        return(
        <div>
            <h2>{props.employee.attributes.name}</h2>
            {/* <h4>{props.employee.title}</h4> */}
            <img src={props.employee.attributes.image} alt="employee" />
            <p>Experience: {props.employee.attributes.years} Years</p>
            <button name="delete" onClick={() => props.delete(props.employee.id)}>Fire</button>
            <button name="edit" onClick={() => props.handleEdit(props.employee)}>Edit</button>
        </div>
    )
}

export default EmployeeCard