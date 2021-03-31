import React from 'react'

const EmployeeSelect = (props) => {
    return(
        <div>
            <select>
                <option></option>
                {props.employees.map(employee => <option>{employee.attributes.name}</option>)}
            </select>
        </div>
    )
}

export default EmployeeSelect