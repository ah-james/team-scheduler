import React from 'react'

const TitleCard = (props) => {
        return(
        <div>
            <h2>{props.title.attributes.title}</h2>
        </div>
    )
}

export default TitleCard