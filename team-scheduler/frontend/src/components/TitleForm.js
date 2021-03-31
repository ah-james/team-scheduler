import React from 'react'
import { createTitle } from '../actions/titlesActions'
import { connect } from 'react-redux'

class TitleForm extends React.Component {
    state = {
        title: ''
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
            title: ''
        })
    }  

    render() {
        return(
            <div>
                <h2>Create a New Title</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.title} onChange={this.handleChange} name="title" />
                    <input type='submit' />
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

export default connect(mapStateToProps, { createTitle })(TitleForm)