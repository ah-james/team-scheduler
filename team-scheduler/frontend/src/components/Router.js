import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import EmployeesContainer from '../containers/EmployeesContainer'
import TitlesContainer from '../containers/TitlesContainer'
import AboutPage from './AboutPage'
import TitleShowPage from './TitleShowPage'

export const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/employees' component={EmployeesContainer} />
            <Route path='/titles' component={TitlesContainer} />
            <Route path='/about' component={AboutPage} />
            <Route path='/titles/:titleId' component={TitleShowPage} />
        </Switch>
    )
}