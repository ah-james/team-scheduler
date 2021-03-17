import React from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'

class EmployeesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees()
    }

    render() {
        return(
            <div>
                Employees Container
            </div>
        )
    }
}

export default connect(null, { fetchEmployees })(EmployeesContainer)
