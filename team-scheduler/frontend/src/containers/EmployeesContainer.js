import React from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'
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
        this.props.fetchTitles()
    }

    render() {
        // debugger 
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
    return { 
        employees: state.employees,
        titles: state.titles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(fetchEmployees()),
        fetchTitles: () => dispatch(fetchTitles()),
        deleteEmployee: employee => dispatch(deleteEmployee(employee)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)
