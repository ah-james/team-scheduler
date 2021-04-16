import React from 'react'
import { connect } from 'react-redux'
import { increaseAward } from '../actions/employeesActions'

class EmployeeCard extends React.Component {

    addAward = (employee) => {
        this.props.increaseAward(employee)
    }

    render() { 
        return(
            <div class="col-md-3 border border-dark m-4 p-4">
                <h2>{this.props.employee.attributes.name}</h2>
                <img src={this.props.employee.attributes.image} alt="employee" />
                <p>Experience: {this.props.employee.attributes.years} Years</p>
                <p>Employee of the Month: {this.props.employee.attributes.awards}</p>
                <div class="btn-group">
                    <button class="btn btn-outline-dark" name="delete" onClick={() => this.props.delete(this.props.employee.id)}>Fire</button>
                    <button class="btn btn-outline-dark" onClick={() => this.props.handleEdit(this.props.employee)}>Edit</button>
                    <button class="btn btn-outline-dark" name='award' onClick={() => this.addAward(this.props.employee)}>Award</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseAward: employee => dispatch(increaseAward(employee))
    }
}

export default connect(null, mapDispatchToProps)(EmployeeCard)