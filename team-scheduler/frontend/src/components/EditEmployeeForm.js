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
        <div>
            <br />
            <h2>Edit Your Employee</h2>
            <form onSubmit={update}><br />
                <label>Name: </label>
                <input type='text' value={name} onChange={e => setName(e.target.value)} name="name" />
                <div class='text-danger'>{errors.name}</div>
                <br /><br />
                <label>Image: </label>
                <input type='text' value={image} onChange={e => setImage(e.target.value)} name="image" />
                <div class='text-danger'>{errors.name}</div>
                <br /><br />
                <label>Years: </label>
                <input type='number' value={years} onChange={e => setYears(e.target.value)} name="years" />
                <br /><br />
                <label>Employee Awards: </label>
                <input type='number' value={parseInt(awards)} onChange={e => setAwards(e.target.value)} name="awards"/>
                <br /><br />
                <label>Title: </label>
                <select type='dropdown' onChange={e => setTitleId(e.target.value)} name="title_id">
                    <option value='0'>        </option>
                    {titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                </select>
                <br /><br />
                <input class="btn btn-outline-dark" type="submit" value="Edit Employee" />
            </form>
        </div>
    )
}

export default EditEmployeeForm