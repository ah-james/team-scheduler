import React from 'react'

const TitleCard = (props) => {
    return(
        <div>
            <h2>{props.title.attributes.title_name}</h2>
            <button name="delete" onClick={() => props.delete(props.title.id)}>Delete</button>
            {props.employees.filter(employee => employee.attributes.title_id === parseInt(props.title.id)).map(filteredEmployee => (
                <li>{filteredEmployee.attributes.name} - {filteredEmployee.attributes.years} Years</li>
            ))}
            
        </div>
    )
}

export default TitleCard