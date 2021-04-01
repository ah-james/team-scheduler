import React from 'react'
import EmployeeSelect from './EmployeeSelect'

const WeekdayCard = (props) => {
    return(
        <div class="col-md-3">
            <h1>{props.weekday}</h1>
            {props.titles.map(title => 
                <div id={`${props.weekday}-${title.attributes.title_name}-dropdown`}>
                    <label>{title.attributes.title_name}<br/></label>
                    <EmployeeSelect weekday={props.weekday} employees={props.employees}/>
                </div>
            )}
            <button onClick={() =>props.handleClick()}>Lock</button>
        </div>
    )
}

export default WeekdayCard