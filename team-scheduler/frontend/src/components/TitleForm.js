import React from 'react'
import { createTitle } from '../actions/titlesActions'
import { connect } from 'react-redux'

class TitleForm extends React.Component {
    state = {
        title_name: '',
        description: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTitle(this.state)
        this.setState({
            title_name: '',
            description: ''
        })
    }  

    render() {
        return(
            <div>
                <h2>Create a New Title</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: </label>
                    <input type='text' value={this.state.title_name} onChange={this.handleChange} name="title_name" />
                    <br /><br />
                    <label>Description: </label>
                    <input type='text' value={this.state.description} onChange={this.handleChange} name="description" />
                    <br /><br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, { createTitle })(TitleForm)