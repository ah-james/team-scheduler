import React from 'react'
import EmployeeSelect from './EmployeeSelect'

const WeekdayCard = (props) => {
    return(
        <div class="col-md-3">
            <h1>{props.weekday}</h1>
            {props.titles.map(title => 
            <div class="home-dropdown">
            <label>{title.attributes.title}<br/></label>
            <EmployeeSelect employees={props.employees}/>
            </div>
            )}
        </div>
    )
}

export default WeekdayCard


// filteredEmployees() {
//     let filteredEmployees = []
//     for (let i = 0; i < this.props.employees.length; i++) {
//         for (let j = 0; j < this.props.titles.length; j++) {
//             if (this.props.employees[i].attributes.title_id === parseInt(this.props.titles[j].id)) {
//                 filteredEmployees.push(this.props.employees[i].attributes.name)
//             }
//         }
//     }
//     return filteredEmployees
// }



