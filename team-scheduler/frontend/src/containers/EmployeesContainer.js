import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as employeeActions from '../actions/employeesActions'
import * as titlesActions from '../actions/titlesActions'
import EmployeeForm from '../components/EmployeeForm'
import EditEmployeeForm from '../components/EditEmployeeForm'
import EmployeeCard from '../components/EmployeeCard'
import Search from '../components/Search'

const EmployeesContainer = props => {
    const [employeeId, setEmployeeId] = useState(false)
    const [search, setSearch] = useState('')

    // use redux's useSelector hook instead of mapStateToProps
    const employees = useSelector(state => state.employees)
    // save useDispatch hook to a variable for ease of use
    const dispatch = useDispatch()

    const filteredEmployees = search.length === 0 ? employees : 
        employees.filter(employee =>
            employee.attributes.name.toLowerCase().includes(search.toLowerCase())    
        )

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

    const handleDelete = async employee => {
        await dispatch(employeeActions.deleteEmployee(employee))
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    return(
        <div>
            {employeeId ? <EditEmployeeForm resetEmployeeId={resetEmployeeId} employeeId={employeeId} /> : <EmployeeForm />}
            <div class="album py-5 bg-light">
                <div id='search-field'>
                    <Search handleInputChange={handleInputChange} />
                </div>
                <div class='container'>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {filteredEmployees.map((employee) => 
                            <EmployeeCard key={employee.id} employee={employee} handleEdit={handleEdit} delete={() => handleDelete(employee.id)} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeesContainer
