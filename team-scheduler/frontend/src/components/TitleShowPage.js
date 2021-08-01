import React from 'react'
import { useSelector } from 'react-redux'

import EmployeeCard from './EmployeeCard'

const TitleShowPage = props => {
    const employees = useSelector(state => state.employees)
    const titles = useSelector(state => state.titles)

    let titleDetails = titles.filter(title => title.id === props.match.params.id)[0]

    return(
        <div>
            <h2>{titleDetails.attributes.title_name} Employees</h2>
            <h3>{titleDetails.attributes.description}</h3>
            <div class="row">
                {employees.filter(employee => employee.attributes.title_id === parseInt(props.match.params.id)).map(filteredEmployee => (
                    <EmployeeCard employee={filteredEmployee} />
                ))}
            </div>
        </div>
    )
}

export default TitleShowPage