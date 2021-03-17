import React from 'react'
import { Card } from 'semantic-ui-react'

export default class Weekday extends React.Component {
    render() {
        return(
            <Card>
                <div>{this.props.day}</div>
            </Card>
        )
    }
}