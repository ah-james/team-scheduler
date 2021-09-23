import react from 'react';

const Search = props => {
    return(
        <div>
            <input type='text' placeholder='Search for an Employee' onChange={props.handleInputChange} />
        </div>
    )
}

export default Search