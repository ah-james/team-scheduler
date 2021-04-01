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

    handleClick = () => {
        debugger
        // selectors[0].options[selectors[0].selectedIndex].text
    }

    render(){
        return(
            <div class="row">
                <WeekdayCard weekday={'Monday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
                <WeekdayCard weekday={'Tuesday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
                <WeekdayCard weekday={'Wednesday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
                <WeekdayCard weekday={'Thursday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
                <WeekdayCard weekday={'Friday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
                <WeekdayCard weekday={'Saturday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
                <WeekdayCard weekday={'Sunday'} titles={this.props.titles} employees={this.props.employees} handleClick={this.handleClick} />
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