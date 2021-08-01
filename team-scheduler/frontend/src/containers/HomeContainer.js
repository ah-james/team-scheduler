import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTitles } from '../actions/titlesActions'
import { fetchEmployees } from '../actions/employeesActions'
import WeekdayCard from '../components/WeekdayCard'

const HomeContainer = props => {

    const employees = useSelector(state => state.employees)
    const titles = useSelector(state => state.titles)
    const dispatch = useDispatch()

    const loadPage = useCallback(async () => {
        try {
            await dispatch(fetchEmployees())
            await dispatch(fetchTitles())
        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    useEffect(() => {
        loadPage()
    }, [loadPage])

    return(
        <div class="row">
            <WeekdayCard weekday={'Monday'} titles={titles} employees={employees} />
            <WeekdayCard weekday={'Tuesday'} titles={titles} employees={employees} />
            <WeekdayCard weekday={'Wednesday'} titles={titles} employees={employees} />
            <WeekdayCard weekday={'Thursday'} titles={titles} employees={employees} />
            <WeekdayCard weekday={'Friday'} titles={titles} employees={employees} />
            <WeekdayCard weekday={'Saturday'} titles={titles} employees={employees} />
            <WeekdayCard weekday={'Sunday'} titles={titles} employees={employees} />
        </div>
    )
}

export default HomeContainer