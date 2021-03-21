import React from 'react'
import { connect } from 'react-redux'
import { fetchTitles } from '../actions/titlesActions'
import { fetchEmployees } from '../actions/employeesActions'
import WeekdayCard from '../components/WeekdayCard'

class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees()
        this.props.fetchTitles()
    }
    render(){
        // debugger
        return(
            <div class="row">
                <WeekdayCard weekday={'Monday'} titles={this.props.titles} employees={this.props.employees} />
                <WeekdayCard weekday={'Tuesday'} titles={this.props.titles} employees={this.props.employees} />
                <WeekdayCard weekday={'Wednesday'} titles={this.props.titles} employees={this.props.employees} />
                <WeekdayCard weekday={'Thursday'} titles={this.props.titles} employees={this.props.employees} />
                <WeekdayCard weekday={'Friday'} titles={this.props.titles} employees={this.props.employees} />
                <WeekdayCard weekday={'Saturday'} titles={this.props.titles} employees={this.props.employees} />
                <WeekdayCard weekday={'Sunday'} titles={this.props.titles} employees={this.props.employees} />
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
        fetchEmployees: () => dispatch(fetchEmployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)