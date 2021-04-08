import React from 'react'
import { connect } from 'react-redux'
import { increaseAward } from '../actions/employeesActions'

class EmployeeCard extends React.Component {
    state = {
        id: this.props.employee.id,
        name: this.props.employee.attributes.name,
        image: this.props.employee.attributes.image,
        years: this.props.employee.attributes.years,
        awards: this.props.employee.attributes.awards,
        title_id: this.props.employee.attributes.title_id,
    }

    addAward = (employee) => {
        this.props.increaseAward(employee)
        debugger
    }

    render() { 
        return(
            <div class="col-md-3">
                <h2>{this.props.employee.attributes.name}</h2>
                <img src={this.props.employee.attributes.image} alt="employee" />
                <p>Experience: {this.props.employee.attributes.years} Years</p>
                <p>Employee of the Month: {this.props.employee.attributes.awards}</p>
                <button name="delete" onClick={() => this.props.delete(this.props.employee.id)}>Fire</button>
                <button name="edit" onClick={() => this.props.handleEdit(this.props.employee)}>Edit</button>
                <button name='award' onClick={() => this.addAward(this.props.employee)}>Award</button>
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