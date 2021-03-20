import React from 'react'
import WeekdayCard from '../components/WeekdayCard'

export default class HomeContainer extends React.Component {
    render(){
        return(
            <div>
                <WeekdayCard weekday={'Monday'} />
                <WeekdayCard weekday={'Tuesday'} />
                <WeekdayCard weekday={'Wednesday'} />
                <WeekdayCard weekday={'Thursday'} />
                <WeekdayCard weekday={'Friday'} />
                <WeekdayCard weekday={'Saturday'} />
                <WeekdayCard weekday={'Sunday'} />
            </div>
        )
    }
}