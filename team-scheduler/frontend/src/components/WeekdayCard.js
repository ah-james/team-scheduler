import React from 'react'

class WeekdayCard extends React.Component {
    render() {
        // debugger
        return(
            <div>
                <h1>{this.props.weekday}</h1>
                {this.props.titles.map(title => <label>{title.attributes.title}<br/></label>)}
            </div>
        )
    }
}

export default WeekdayCard