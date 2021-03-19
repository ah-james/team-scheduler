import React from 'react'
import { addEmployee } from '../actions/employeesActions'
import { connect } from 'react-redux'

class EmployeesForm extends React.Component {
    state = {
        name: '',
        image: '',
        years: 0,
        title: '',
        position: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addEmployee(this.state)
    }   

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                    <br />
                    <label>Image: </label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image" />
                    <br />
                    <label>Years: </label>
                    <input type='number' value={this.state.years} onChange={this.handleChange} name="years" />
                    <br />
                    {/* <label>Title: </label>
                    <select type='dropdown' value={this.state.title} onChange={this.handleChange} name="title" />
                    <br />
                    <label>Positions: </label>
                    <input type='checkbox' value={this.state.position} onChange={this.handleChange} name="name" />
                    <br /> */}
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addEmployee })(EmployeesForm)