import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import TitleCard from '../components/TitleCard'
import TitleForm from '../components/TitleForm'
import { fetchTitles } from '../actions/titlesActions'
import { fetchEmployees } from '../actions/employeesActions'
import { deleteTitle } from '../actions/titlesActions'

const TitlesContainer = props => {

    useEffect(() => {
        props.fetchTitles()
        props.fetchEmployees()
    }, [fetchTitles, fetchEmployees])
    
    return(
        <div>
            <TitleForm />
            <br />
            <div class="row">
                {props.titles.map(title => <TitleCard title={title} employees={props.employees} delete={props.deleteTitle} />)}
            </div>
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
        fetchEmployees: () => dispatch(fetchEmployees()),
        deleteTitle: title => dispatch(deleteTitle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlesContainer)