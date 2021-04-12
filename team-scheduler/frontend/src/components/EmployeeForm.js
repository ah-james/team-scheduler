import React from 'react'
import { addEmployee } from '../actions/employeesActions'
import { connect } from 'react-redux'

class EmployeeForm extends React.Component {
    state = {
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
            errors['name'] = '*Please enter an image'
        }

        if (this.state.name) {
            if (!this.state.name.match(/^\w+$/)) {
                formIsValid = false
                errors['name'] = '*Please use alphabetic characters only'
            }
        }

        this.setState({ errors })
        return formIsValid
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.validateForm()) {
            this.props.addEmployee(this.state)
        }
        this.setState({
            name: '',
            image: '',
            years: 0,
            awards: 0,
            title_id: '',
        })
    }   

    render() {
        return(
            <div>
                <br />
                <h2>Create a New Employee</h2><br />
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <div className='error'>{this.state.errors.name}</div>
                    <br /><br />
                    <label>Image: </label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image"/>
                    <div className='error'>{this.state.errors.image}</div>
                    <br /><br />
                    <label>Years: </label>
                    <input type='number' value={parseInt(this.state.years)} onChange={this.handleChange} name="years"/>
                    <br /><br />
                    <label>Employee Awards: </label>
                    <input type='number' value={parseInt(this.state.awards)} onChange={this.handleChange} name="awards"/>
                    <br /><br />
                    <label>Title: </label>
                    <select type='dropdown' onChange={this.handleChange} name="title_id">
                        <option>        </option>
                        {this.props.titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                    </select>
                    <br /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        titles: state.titles
    }
}

export default connect(mapStateToProps, { addEmployee })(EmployeeForm)