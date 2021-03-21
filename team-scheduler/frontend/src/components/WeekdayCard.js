import React from 'react'
// import EmployeesContainer from '../containers/EmployeesContainer'

class WeekdayCard extends React.Component {

    filteredEmployees() {
        let filteredEmployees = []
        for (let i = 0; i < this.props.employees.length; i++) {
            for (let j = 0; j < this.props.titles.length; j++) {
                if (this.props.employees[i].attributes.title_id === parseInt(this.props.titles[j].id)) {
                    filteredEmployees.push(this.props.employees[i].attributes.name)
                }
            }
        }
        return filteredEmployees
    }


    render() {
        // debugger
        return(
            <div>
                <h1>{this.props.weekday}</h1>
                {this.props.titles.map(title => 
                <div class="home-dropdown">
                <label>{title.attributes.title}<br/></label>
                <select>
                    <option></option>
                    {this.props.employees.map(employee => <option>{employee.attributes.name}</option>)}
                </select>
                </div>
                )}
            </div>
        )
    }
}

export default WeekdayCard

