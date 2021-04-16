import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../actions/employeesActions'

class EditEmployeeForm extends Component {
    state = {
        id: '',
        name: '',
        image: '',
        years: 0,
        awards: 0,
        title_id: '',
        errors: {}
    }

    validateForm = () => {
        let errors = {}
        let formIsValid = true

        if (!this.state.name) {
            formIsValid = false
            errors['name'] = '*Please enter a name'
        }

        if (!this.state.image) {
            formIsValid = false
            errors['image'] = '*Please enter an image'
        }

        if (this.state.name) {
            if (!this.state.name.match(/[a-zA-Z]/)) {
                formIsValid = false
                errors['name'] = '*Please only use letters'
            }
        }

        this.setState({ errors })
        return formIsValid
    }

    componentDidMount() {
        this.findEmployee()
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    findEmployee = () => {
        const { employees, employeeId } = this.props 
        const employee = employees.find(employee => employee.id === employeeId)
        this.setState({
            id: employee.id,
            name: employee.attributes.name,
            image: employee.attributes.image,
            years: employee.attributes.years,
            awards: employee.attributes.awards,
            title_id: employee.attributes.title_id
        })
    }

    update = event => {
        event.preventDefault()
        this.props.editEmployee(this.state)
        this.props.resetEmployeeId()
    }

    render() {
        return(
            <div>
                <br />
                <h2>Edit Your Employee</h2>
                <form onSubmit={this.update}><br />
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                    <div class='text-danger'>{this.state.errors.name}</div>
                    <br /><br />
                    <label>Image: </label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                    <div class='text-danger'>{this.state.errors.name}</div>
                    <br /><br />
                    <label>Years: </label>
                    <input type='number' value={this.state.years} onChange={this.handleChange} name="years" />
                    <br /><br />
                    <label>Employee Awards: </label>
                    <input type='number' value={parseInt(this.state.awards)} onChange={this.handleChange} name="awards"/>
                    <br /><br />
                    <label>Title: </label>
                    <select type='dropdown' onChange={this.handleChange} name="title_id">
                        <option value='0'>        </option>
                        {this.props.titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                    </select>
                    <br /><br />
                    <input class="btn btn-outline-dark" type="submit" value="Edit Employee" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        employees: state.employees,
        titles: state.titles
    }
}

export default connect(mapStateToProps, { editEmployee })(EditEmployeeForm)