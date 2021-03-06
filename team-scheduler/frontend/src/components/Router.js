import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import EmployeesContainer from '../containers/EmployeesContainer'
import TitlesContainer from '../containers/TitlesContainer'
import AboutPage from './AboutPage'
import TitleShowContainer from '../containers/TitleShowContainer'

export const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={EmployeesContainer} />
            <Route path='/schedule' component={HomeContainer} />
            <Route exact path='/titles' component={TitlesContainer} />
            <Route path='/about' component={AboutPage} />
            <Route path='/titles/:id' component={TitleShowContainer} />
        </Switch>
    )
}