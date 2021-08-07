import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createTitle } from '../actions/titlesActions'

const TitleForm = props => {
    const [title_name, setTitleName] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(createTitle(title_name, description))
        setTitleName('')
        setDescription('')
    }  

    return(
        <div>
            <h2>Create a New Title</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type='text' value={title_name} onChange={e => setTitleName(e.target.value)} name="title_name" />
                <br /><br />
                <label>Description: </label>
                <input type='text' value={description} onChange={e => setDescription(e.target.value)} name="description" />
                <br /><br />
                <input type='submit' />
            </form>
        </div>
    )
}

export default TitleForm