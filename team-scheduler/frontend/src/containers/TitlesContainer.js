import React from 'react'
import { connect } from 'react-redux'
import TitleCard from '../components/TitleCard'
import TitleForm from '../components/TitleForm'
import { fetchTitles } from '../actions/titlesActions'
import { fetchEmployees } from '../actions/employeesActions'
import { deleteTitle } from '../actions/titlesActions'

class TitlesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTitles()
        this.props.fetchEmployees()
    }
    
    render() {
        return(
            <div>
                <TitleForm />
                {this.props.titles.map(title => <TitleCard title={title} employees={this.props.employees} delete={this.props.deleteTitle} />)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitles: () => dispatch(fetchTitles()),
        fetchEmployees: () => dispatch(fetchEmployees()),
        deleteTitle: title => dispatch(deleteTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlesContainer)