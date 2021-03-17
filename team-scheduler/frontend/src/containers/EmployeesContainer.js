import React from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'
import EmployeesForm from '../components/EmployeesForm'

class EmployeesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees()
    }

    render() {
        return(
            <div>
                Employees Container
                <EmployeesForm />
            </div>
        )
    }
}

export default connect(null, { fetchEmployees })(EmployeesContainer)
