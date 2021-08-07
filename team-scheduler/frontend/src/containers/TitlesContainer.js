import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
    }, [dispatch])

    useEffect(() => {
        loadPage()
    }, [loadPage])

    const handleDelete = async title => {
        await dispatch(deleteTitle(title))
    }
    
    return(
        <div>
            <TitleForm />
            <br />
            <div class="row">
                {titles.map(title => <TitleCard title={title} employees={employees} delete={() => handleDelete(title.id)} />)}
            </div>
        </div>
    )
}

export default TitlesContainer