import React from 'react'
import { connect } from 'react-redux'
import TitleCard from '../components/TitleCard'
import { fetchTitles } from '../actions/titlesActions'

class TitlesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTitles()
    }
    
    render() {
        return(
            <div>
                {this.props.titles.map(title => <TitleCard title={title} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        employees: state.employees,
        titles: state.titles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitles: () => dispatch(fetchTitles()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlesContainer)