import React from 'react'

const EmployeeSelect = (props) => {
    return(
        <div>
            <select class={`${props.weekday}-selector`}>
                <option id={`employee-0`}></option>
                {/* {props.employees.map(employee => <option id={`employee-${employee.id}`} >{employee.attributes.name}</option>)} */}
                {props.employees.filter(employee => employee.attributes.title_id === parseInt(props.titleId)).map(filteredEmployee => (
                    <option id={`employee-${filteredEmployee.id}`} >{filteredEmployee.attributes.name}</option>
                ))}
            </select>
        </div>
    )
}

export default EmployeeSelect