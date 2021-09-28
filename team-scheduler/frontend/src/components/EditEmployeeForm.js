import React, { useEffect, useState, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { editEmployee } from '../actions/employeesActions'

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
                [action.field]: action.payload
            }
        default:
            return state
    }
}

const EditEmployeeForm = props => {
    const [id, setId] = useState('')
    // const [name, setName] = useState('')
    // const [image, setImage] = useState('')
    // const [years, setYears] = useState(0)
    // const [awards, setAwards] = useState(0)
    // const [title_id, setTitleId] = useState('')
    const [errors, setErrors] = useState({})

    const [formState, dispatchState] = useReducer(formReducer, initialState)

    const employees = useSelector(state => state.employees)
    const titles = useSelector(state => state.titles)

    const dispatch = useDispatch()

    const validateForm = () => {
        let errors = {}
        let formIsValid = true

        if (!formState.name) {
            formIsValid = false
            errors['name'] = '*Please enter a name'
        }

        if (!formState.image) {
            formIsValid = false
            errors['image'] = '*Please enter an image'
        }

        if (formState.name) {
            if (!formState.name.match(/[a-zA-Z]/)) {
                formIsValid = false
                errors['name'] = '*Please only use letters'
            }
        }

        setErrors({ errors })
        return formIsValid
    }

    const handleTextChange = (event) => {
        dispatchState({
            type: "HANDLE_INPUT",
            field: event.target.name,
            payload: event.target.value,
        })
    }

    const findEmployee = () => {
        const { employeeId } = props
        const employee = employees.find(employee => employee.id === employeeId)
        setId(employeeId)
        // formState.name = employee.attributes.name
        // formState.image = employee.attributes.image
        // formState.years = employee.attributes.years
        // formState.awards = employee.attributes.awards
        // formState.title_id = employee.attributes.title_id
    }

    useEffect(() => findEmployee(), [findEmployee])

    const update = event => {
        event.preventDefault()
        // console.log(id, name, image, years, awards, title_id)
        if (validateForm()) {
            dispatch(editEmployee(id, formState.name, formState.image, formState.years, formState.awards, formState.title_id))
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
                            <input type='text' value={formState.name} onChange={e => handleTextChange(e)} name="name" />
                            <div class='text-danger'>{errors.name}</div>
                        </div>
                        <div class="mb-3">
                            <label>Image: </label>
                            <input type='text' value={formState.image} onChange={e => handleTextChange(e)} name="image" />
                            <div class='text-danger'>{errors.name}</div>     
                        </div>      
                        <div class="mb-3">
                            <label>Years: </label>
                            <input type='number' value={parseInt(formState.years)} onChange={e => handleTextChange(e)} name="years" />                
                        </div>
                        <div class="mb-3">
                            <label>Employee Awards: </label>
                            <input type='number' value={parseInt(formState.awards)} onChange={e => handleTextChange(e)} name="awards"/>
                        </div>  
                        <div class="mb-3">              
                            <label>Title: </label>
                            <select type='dropdown' onChange={e => handleTextChange(e)} name="title_id">
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