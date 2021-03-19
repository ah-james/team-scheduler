import React from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'
import { fetchPositions } from '../actions/positionsActions'
import { fetchTitles } from '../actions/titlesActions'
import EmployeesForm from '../components/EmployeesForm'
// import EmployeeCard from '../components/EmployeeCard'

class EmployeesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees()
        this.props.fetchPositions()
        this.props.fetchTitles()
    }

    render() {
        debugger
        return(
            <div>
                Employees Container
                {/* {this.props.employees.map(employee => <EmployeeCard employee={employee} />)} */}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return { employees: state.employees }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployees: () => dispatch(fetchEmployees()),
        fetchPositions: () => dispatch(fetchPositions()),
        fetchTitles: () => dispatch(fetchTitles())
    }
}

export default connect(null, mapDispatchToProps)(EmployeesContainer)
