import React, { useEffect, useState, useCallback } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import * as employeeActions from '../actions/employeesActions'
import * as titlesActions from '../actions/titlesActions'
import EmployeeForm from '../components/EmployeeForm'
import EditEmployeeForm from '../components/EditEmployeeForm'
import EmployeeCard from '../components/EmployeeCard'

const EmployeesContainer = props => {
    const [employeeId, setEmployeeId] = useState(false)

    // use redux's useSelector hook instead of mapStateToProps
    const employees = useSelector(state => state.employees)
    // save useDispatch hook to a variable for ease of use
    const dispatch = useDispatch()

    const loadPage = useCallback(async () => {
        try {
            await dispatch(employeeActions.fetchEmployees())
            await dispatch(titlesActions.fetchTitles())
        } catch (error) {
            console.log(error.message)
        }
    }, [dispatch])

    useEffect(() => {
        loadPage()
    }, [loadPage])

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
                {employees.map((employee) => 
                    <EmployeeCard key={employee.id} employee={employee} handleEdit={handleEdit} delete={props.deleteEmployee} />)}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEmployee: employee => dispatch(employeeActions.deleteEmployee(employee)),
        // editEmployee: employee => dispatch(editEmployee(employee))
    }
}

export default connect(null, mapDispatchToProps)(EmployeesContainer)
