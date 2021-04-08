import React from 'react'

const TitleShowPage = props => {
    return(
        <div>
            <h2>{props.title.attributes.title_name}</h2>
            <h2>{props.title.attributes.description}</h2>
        </div>
    )
}

export default TitleShowPage