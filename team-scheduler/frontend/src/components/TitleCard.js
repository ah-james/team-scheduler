import React from 'react'
import { Link } from 'react-router-dom'

const TitleCard = (props) => {
    return(
        <div class="col-sm">
            <Link key={props.title.id} to={`/titles/${props.title.id}`}>{props.title.attributes.title_name}</Link> 
            <br />
            <button name="delete" onClick={() => props.delete(props.title.id)}>Delete</button>
            {props.employees.filter(employee => employee.attributes.title_id === parseInt(props.title.id)).map(filteredEmployee => (
                <li>{filteredEmployee.attributes.name} - {filteredEmployee.attributes.years} Years</li>
            ))}
            <br />
        </div>
    )
}

export default TitleCard