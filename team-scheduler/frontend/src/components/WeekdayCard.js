import React from 'react'

export default class WeekdayCard extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.weekday}</h1>
            </div>
        )
    }
}