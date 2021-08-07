import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import { addEmployee } from '../actions/employeesActions'


const EmployeeForm = props => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [years, setYears] = useState(0)
    const [awards, setAwards] = useState(0)
    const [title_id, setTitleId] = useState('')
    const [errors, setErrors] = useState({})

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

    const handleSubmit = event => {
        event.preventDefault()
        if (validateForm()) {
            dispatch(addEmployee(name, image, years, awards, title_id))
        }
        setName('')
        setImage('')
        setYears(0)
        setAwards(0)
        setTitleId('')
        setErrors({})
    }   

    return(
        <div>
            <br />
            <h2>Create a New Employee</h2><br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} name="name"/>
                    <div class='text-danger'>{errors.name}</div>
                </div>
                <br /><br />
                <div>
                    <label>Image</label>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} name="image"/>
                    <div class='text-danger'>{errors.image}</div>
                </div>
                <br /><br />
                <div>
                    <label>Years</label>
                    <input type='number' value={parseInt(years)} onChange={e => setYears(e.target.value)} name="years"/>
                </div>
                <br /><br />
                <div>
                    <label>Employee Awards</label>
                    <input type='number' value={parseInt(awards)} onChange={e => setAwards(e.target.value)} name="awards"/>
                </div>
                <br /><br />
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <select class="custom-select custom-select-lg mb-3" type='dropdown' onChange={e => setTitleId(e.target.value)} name="title_id">
                        <option>        </option>
                        {titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                    </select>
                </div>
                <br /><br />
                <input class="btn btn-outline-dark" type="submit" />
            </form>
        </div>
    )
}

export default EmployeeForm