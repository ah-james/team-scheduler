import React from 'react'

export default class EmployeesForm extends React.Component {
    state = {
        name: '',
        image: '',
        years: 0,
        title: '',
        position: ''
    }

    render() {
        return(
            <div>
                <form>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                    <br />
                    <label>Image: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="image" />
                    <br />
                    <label>Years: </label>
                    <input type='number' value={this.state.name} onChange={this.handleChange} name="years" />
                    <br />
                    <label>Title: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="title" />
                    <br />
                    <label>Position: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name" />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}