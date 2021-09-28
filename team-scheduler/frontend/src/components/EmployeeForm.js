import React, { useState, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addEmployee } from '../actions/employeesActions'

const initialState = {
    name: '',
    image: '',
    years: 0,
    awards: 0,
    title_id: ''
}

const formReducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_INPUT":
            return {
                ...state,
                [action.field]: action.payload,
            }
        default:
            return state
    }
}

const EmployeeForm = props => {
    // const [name, setName] = useState('')
    // const [image, setImage] = useState('')
    // const [years, setYears] = useState(0)
    // const [awards, setAwards] = useState(0)
    // const [title_id, setTitleId] = useState('')
    const [formErrors, setFormErrors] = useState({
        errorName: '',
        image: ''
    })

    // implement useReducer
    const [formState, dispatchState] = useReducer(formReducer, initialState)

    const titles = useSelector(state => state.titles)
    const dispatch = useDispatch()

    const validateForm = () => {
        // let formErrors = {}
        let formIsValid = true

        if (!formState.name) {
            formIsValid = false
            // formErrors['name'] = '*Please enter a name'
            setFormErrors({ 
                ...formErrors,
                errorName: '*Please enter a name' 
            })
        }

        if (!formState.image) {
            formIsValid = false
            // formErrors['image'] = '*Please enter an image'
            setFormErrors({ 
                ...formErrors,
                image: '*Please enter an image' 
            })
        }

        if (formState.name) {
            if (!formState.name.match(/[a-zA-Z]/)) {
                formIsValid = false
                // formErrors['name'] = '*Please only use letters'
                setFormErrors({
                    ...formErrors, 
                    errorName: '*Please only use letters' 
                })
            }
        }

        // setErrors(formErrors)
        return formIsValid
    }

    const handleTextChange = (event) => {
        dispatchState({
            type: "HANDLE_INPUT",
            field: event.target.name,
            payload: event.target.value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (validateForm()) {
            dispatch(addEmployee(formState.name, formState.image, formState.years, formState.awards, formState.title_id))
        }
        formState.name = ''
        formState.image = ''
        formState.years = 0
        formState.awards = 0
        formState.title_id = ''
        setFormErrors({})
    }   

    return(
        <div class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h2>Create a New Employee</h2><br />
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for='name'>Name: </label>
                            <input id='name' type='text' value={formState.name} onChange={e => handleTextChange(e)} name="name"/>
                            <div class='text-danger'>{formErrors.name}</div>
                        </div>
                        <div class="mb-3">
                            <label>Image: </label>
                            <input type='text' value={formState.image} onChange={e => handleTextChange(e)} name="image"/>
                            <div class='text-danger'>{formErrors.image}</div>
                        </div>
                        <div class="mb-3">
                            <label>Years: </label>
                            <input type='number' value={parseInt(formState.years)} onChange={e => handleTextChange(e)} name="years"/>
                        </div>
                        <div class="mb-3">
                            <label>Employee Awards: </label>
                            <input type='number' value={parseInt(formState.awards)} onChange={e => handleTextChange(e)} name="awards"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Title: </label>
                            <select class="custom-select custom-select-lg mb-3" type='dropdown' onChange={e => handleTextChange(e)} name="title_id">
                                <option>        </option>
                                {titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                            </select>
                        </div>
                        <input class="btn btn-outline-dark" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm