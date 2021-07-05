import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions/employeesActions'
import { fetchTitles } from '../actions/titlesActions'
import { deleteEmployee } from '../actions/employeesActions'
import { editEmployee} from '../actions/employeesActions'
import EmployeeForm from '../components/EmployeeForm'
import EditEmployeeForm from '../components/EditEmployeeForm'
import EmployeeCard from '../components/EmployeeCard'

const EmployeesContainer = props => {
    const [employeeId, setEmployeeId] = useState(false)

    useEffect(() => {
        props.fetchEmployees()
        props.fetchTitles()
    }, [fetchEmployees, fetchTitles])

    const handleEdit = employee => {
        setEmployeeId(employee.id)
    }

    const resetEmployeeId = () => {
        setEmployeeId(false)
    }



    return(
        <div>
            {employeeId ? <EditEmployeeForm resetEmployeeId={resetEmployeeId} employeeId={employeeId} /> : <EmployeeForm />}
            <br/><br/>
            <div class="row">
                {props.employees.map((employee) => 
                    <EmployeeCard key={employee.id} employee={employee} handleEdit={handleEdit} delete={props.deleteEmployee} />)}
            </div>
        </div>
    )
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
