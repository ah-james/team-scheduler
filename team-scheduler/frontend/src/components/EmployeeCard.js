import React from 'react'

const EmployeeCard = (props) => {

    return(
        <div>
            <h2>{props.employee.name}</h2>
        </div>
    )
}

export default EmployeeCard