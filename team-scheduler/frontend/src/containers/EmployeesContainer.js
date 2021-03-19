import React from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'
import { fetchPositions } from '../actions/positionsActions'
import { fetchTitles } from '../actions/titlesActions'
import { deleteEmployee } from '../actions/employeesActions'
import EmployeesForm from '../components/EmployeesForm'
import EmployeeCard from '../components/EmployeeCard'

class EmployeesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees()
        this.props.fetchPositions()
        this.props.fetchTitles()
    }

    render() {
        return(
            <div>
                Employees Container
                <EmployeesForm />
                {this.props.employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} delete={this.props.deleteEmployee} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { employees: state.employees }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(fetchEmployees()),
        fetchPositions: () => dispatch(fetchPositions()),
        fetchTitles: () => dispatch(fetchTitles()),
        deleteEmployee: employee => dispatch(deleteEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)
