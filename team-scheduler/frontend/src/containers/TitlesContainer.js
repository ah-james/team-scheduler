import React, { useCallback, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'

import TitleCard from '../components/TitleCard'
import TitleForm from '../components/TitleForm'
import { fetchTitles } from '../actions/titlesActions'
import { fetchEmployees } from '../actions/employeesActions'
import { deleteTitle } from '../actions/titlesActions'

const TitlesContainer = props => {

    const employees = useSelector(state => state.employees)
    const titles = useSelector(state => state.titles)
    const dispatch = useDispatch()

    const loadPage = useCallback(async () => {
        try {
            await dispatch(fetchTitles())
            await dispatch(fetchEmployees())
        } catch (error) {
            console.log(error)
        }
    })

    useEffect(() => {
        loadPage()
    }, [loadPage])
    
    return(
        <div>
            <TitleForm />
            <br />
            <div class="row">
                {titles.map(title => <TitleCard title={title} employees={employees} delete={props.deleteTitle} />)}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTitle: title => dispatch(deleteTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(TitlesContainer)