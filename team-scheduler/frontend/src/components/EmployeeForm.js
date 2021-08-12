import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addEmployee } from '../actions/employeesActions'


const EmployeeForm = props => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [years, setYears] = useState(0)
    const [awards, setAwards] = useState(0)
    const [title_id, setTitleId] = useState('')
    const [formErrors, setFormErrors] = useState({
        name: '',
        image: ''
    })

    const titles = useSelector(state => state.titles)
    const dispatch = useDispatch()

    const validateForm = () => {
        // let formErrors = {}
        let formIsValid = true

        if (!name) {
            formIsValid = false
            // formErrors['name'] = '*Please enter a name'
            setFormErrors({ 
                ...formErrors,
                [name]: '*Please enter a name' 
            })
        }

        if (!image) {
            formIsValid = false
            // formErrors['image'] = '*Please enter an image'
            setFormErrors({ 
                ...formErrors,
                [image]: '*Please enter an image' 
            })
        }

        if (name) {
            if (!name.match(/[a-zA-Z]/)) {
                formIsValid = false
                // formErrors['name'] = '*Please only use letters'
                setFormErrors({
                    ...formErrors, 
                    [name]: '*Please only use letters' 
                })
            }
        }

        // setErrors(formErrors)
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
        setFormErrors({})
    }   

    return(
        <div>
            <br />
            <h2>Create a New Employee</h2><br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} name="name"/>
                    <div class='text-danger'>{formErrors.name}</div>
                </div>
                <br /><br />
                <div>
                    <label>Image</label>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} name="image"/>
                    <div class='text-danger'>{formErrors.image}</div>
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