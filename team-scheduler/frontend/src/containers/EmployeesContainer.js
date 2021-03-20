import React from 'react'
import { connect } from 'react-redux'
import { editEmployee, fetchEmployees } from '../actions/employeesActions'
import { fetchPositions } from '../actions/positionsActions'
import { fetchTitles } from '../actions/titlesActions'
import { deleteEmployee } from '../actions/employeesActions'
import EmployeesForm from '../components/EmployeesForm'
import EditEmployeeForm from '../components/EditEmployeeForm'
import EmployeeCard from '../components/EmployeeCard'

class EmployeesContainer extends React.Component {
    state = {
        employeeId: false
    }

    handleEdit = employee => {
        this.setState({
            employeeId: employee.id
        })
    }

    resetStudentId = () => {
        this.setState({ studentId: false})
    }

    componentDidMount() {
        this.props.fetchEmployees()
        this.props.fetchPositions()
        this.props.fetchTitles()
    }

    render() {
        return(
            <div>
                Employees Container
                {this.state.employeeId ? <EditEmployeeForm resetEmployeeId={this.resetStudentId} employeeId={this.state.employeeId} /> : <EmployeesForm />}
                
                {this.props.employees.map((employee) => <EmployeeCard key={employee.id} employee={employee} handleEdit={this.handleEdit} delete={this.props.deleteEmployee} />)}
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
        deleteEmployee: employee => dispatch(deleteEmployee(employee)),
        // editEmployee: employee => dispatch(editEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)
