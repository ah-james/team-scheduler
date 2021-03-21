import React from 'react'
import { addEmployee } from '../actions/employeesActions'
import { connect } from 'react-redux'

class EmployeeForm extends React.Component {
    state = {
        name: '',
        image: '',
        years: 0,
        title_id: '',
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        // debugger
        event.preventDefault()
        this.props.addEmployee(this.state)
    }   

    render() {
        // debugger
        return(
            <div class='mb-3'>
                <form onSubmit={this.handleSubmit}>
                    <label class="form-label">Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" class="form-control"/>
                    <br />
                    <label class="form-label">Image: </label>
                    <input type='text' value={this.state.image} onChange={this.handleChange} name="image" class="form-control"/>
                    <br />
                    <label class="form-label">Years: </label>
                    <input type='number' value={parseInt(this.state.years)} onChange={this.handleChange} name="years" class="form-control"/>
                    <br />
                    <label class="form-label">Title: </label>
                    <select type='dropdown' onChange={this.handleChange} name="title_id">
                        <option>        </option>
                        {this.props.titles.map((title, id) => <option value={id+1}>{title.attributes.title}</option>)}
                    </select>
                    <br />
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