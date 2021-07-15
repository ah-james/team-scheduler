import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTitles } from '../actions/titlesActions'
import { fetchEmployees } from '../actions/employeesActions'
import WeekdayCard from '../components/WeekdayCard'

const HomeContainer = props => {

    useEffect(() => {
        props.fetchEmployees()
        props.fetchTitles()
    }, [fetchEmployees, fetchTitles])

    return(
        <div class="row">
            <WeekdayCard weekday={'Monday'} titles={props.titles} employees={props.employees} />
            <WeekdayCard weekday={'Tuesday'} titles={props.titles} employees={props.employees} />
            <WeekdayCard weekday={'Wednesday'} titles={props.titles} employees={props.employees} />
            <WeekdayCard weekday={'Thursday'} titles={props.titles} employees={props.employees} />
            <WeekdayCard weekday={'Friday'} titles={props.titles} employees={props.employees} />
            <WeekdayCard weekday={'Saturday'} titles={props.titles} employees={props.employees} />
            <WeekdayCard weekday={'Sunday'} titles={props.titles} employees={props.employees} />
        </div>
    )
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