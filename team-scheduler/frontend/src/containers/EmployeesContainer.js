import React from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'
import { fetchTitles } from '../actions/titlesActions'
import { deleteEmployee } from '../actions/employeesActions'
import { editEmployee} from '../actions/employeesActions'
import EmployeeForm from '../components/EmployeeForm'
import EditEmployeeForm from '../components/EditEmployeeForm'
import EmployeeCard from '../components/EmployeeCard'

class EmployeesContainer extends React.Component {
    state = {
        employeeId: false,
        upvote: 0
    }

    handleEdit = employee => {
        this.setState({
            employeeId: employee.id
        })
    }

    resetEmployeeId = () => {
        this.setState({ employeeId: false})
    }

    componentDidMount() {
        this.props.fetchEmployees()
        this.props.fetchTitles()
    }

    addUpvote = () => {
        this.setState({
            upvote: this.state.upvote + 1
        })
    }

    render() {
        // debugger 
        return(
            <div>
                {this.state.employeeId ? <EditEmployeeForm resetEmployeeId={this.resetEmployeeId} employeeId={this.state.employeeId} /> : <EmployeeForm />}
                <br/><br/>
                <div class="row">
                    {this.props.employees.map((employee) => 
                        <EmployeeCard upvote={this.state.upvote} addUpvote={this.addUpvote} key={employee.id} employee={employee} handleEdit={this.handleEdit} delete={this.props.deleteEmployee} />)}
                </div>
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
        editEmployee: employee => dispatch(editEmployee(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer)
