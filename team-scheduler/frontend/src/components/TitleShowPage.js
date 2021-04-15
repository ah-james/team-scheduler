import React from 'react'
import { connect } from 'react-redux'
import EmployeeCard from './EmployeeCard'

class TitleShowPage extends React.Component {

    render() {
        let titleDetails = this.props.titles.filter( t => t.id === this.props.match.params.id)[0];
        return(
            <div>
                <h2>{titleDetails.attributes.title_name} Employees</h2>
                <h3>{titleDetails.attributes.description}</h3>
                <div class="row">
                    {this.props.employees.filter(employee => employee.attributes.title_id === parseInt(this.props.match.params.id)).map(filteredEmployee => (
                    <EmployeeCard employee={filteredEmployee} />
                    ))}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        titles: state.titles,
        employees: state.employees
    }
}

export default connect(mapStateToProps)(TitleShowPage)