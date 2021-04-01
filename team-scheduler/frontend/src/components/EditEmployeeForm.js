import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../actions/employeesActions'

class EditEmployeeForm extends Component {
    state = {
        id: '',
        name: '',
        image: '',
        years: 0,
        title_id: '',
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
        const { employees, employeeId} = this.props 
        const employee = employees.find(employee => employee.id === employeeId)
        this.setState({
            id: employee.id,
            name: employee.attributes.name,
            image: employee.attributes.image,
            years: employee.attributes.years,
            title_id: employee.attributes.title_id
        })
    }

    update = event => {
        event.preventDefault()
        debugger
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
                    <br /><br />
                    <label>Image: </label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                    <br /><br />
                    <label>Years: </label>
                    <input type='number' value={this.state.years} onChange={this.handleChange} name="years" />
                    <br /><br />
                    <label>Title: </label>
                    <select type='dropdown' onChange={this.handleChange} name="title">
                        <option>        </option>
                        {this.props.titles.map((title, id) => <option value={id+1}>{title.attributes.title_name}</option>)}
                    </select>
                    <br /><br />
                    <input type="submit" value="Edit Employee" />
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