import React from 'react'

const EmployeeCard = (props) => {
    return(
        <div>
            <h2>{props.employee.attributes.name}</h2>
            <img src={props.employee.attributes.image} />
            <p>Experience: {props.employee.attributes.years} Years</p>
            <p></p>
        </div>
    )
}

export default EmployeeCard