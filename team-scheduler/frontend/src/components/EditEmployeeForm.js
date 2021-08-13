import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { editEmployee } from '../actions/employeesActions'

const EditEmployeeForm = props => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [years, setYears] = useState(0)
    const [awards, setAwards] = useState(0)
    const [title_id, setTitleId] = useState('')
    const [errors, setErrors] = useState({})

    const employees = useSelector(state => state.employees)
    const titles = useSelector(state => state.titles)

    const dispatch = useDispatch()

    const validateForm = () => {
        let errors = {}
        let formIsValid = true

        if (!name) {
            formIsValid = false
            errors['name'] = '*Please enter a name'
        }

        if (!image) {
            formIsValid = false
            errors['image'] = '*Please enter an image'
        }

        if (name) {
            if (!name.match(/[a-zA-Z]/)) {
                formIsValid = false
                errors['name'] = '*Please only use letters'
            }
        }

        setErrors({ errors })
        return formIsValid
    }

    const findEmployee = () => {
        const { employeeId } = props
        // const employee = employees.find(employee => employee.id === employeeId)
        setId(employeeId)
        // setName(employee.attributes.name)
        // setImage(employee.attributes.image)
        // setYears(employee.attributes.years)
        // setAwards(employee.attributes.awards)
        // setTitleId(employee.attributes.title_id)
    }

    useEffect(() => findEmployee(), [findEmployee])

    const update = event => {
        event.preventDefault()
        // console.log(id, name, image, years, awards, title_id)
        if (validateForm()) {
            dispatch(editEmployee(id, name, image, years, awards, title_id))
        }
        props.resetEmployeeId()
    }

    return(
        <div class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h2>Edit Your Employee</h2><br />
                    <form onSubmit={update}>
                        <div class="mb-3">
                            <label>Name: </label>
                            <input type='text' value={name} onChange={e => setName(e.target.value)} name="name" />
                            <div class='text-danger'>{errors.name}</div>
                        </div>
                        <div class="mb-3">
                            <label>Image: </label>
                            <input type='text' value={image} onChange={e => setImage(e.target.value)} name="image" />
                            <div class='text-danger'>{errors.name}</div>     
                        </div>      
                        <div class="mb-3">
                            <label>Years: </label>
                            <input type='number' value={years} onChange={e => setYears(e.target.value)} name="years" />                
                        </div>
                        <div class="mb-3">
                            <label>Employee Awards: </label>
                            <input type='number' value={parseInt(awards)} onChange={e => setAwards(e.target.value)} name="awards"/>
                        </div>  
                        <div class="mb-3">              
                            <label>Title: </label>
                            <select type='dropdown' onChange={e => setTitleId(e.target.value)} name="title_id">
                                <option value='0'>        </option>
                                {titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                            </select>   
                        </div>             
                        <input class="btn btn-outline-dark" type="submit" value="Edit Employee" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployeeForm