import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import EmployeesContainer from '../containers/EmployeesContainer'

export const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/employees' component={EmployeesContainer} />
        </Switch>
    )
}