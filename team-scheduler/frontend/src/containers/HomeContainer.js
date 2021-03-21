import React from 'react'
import { connect } from 'react-redux'
import { fetchTitles } from '../actions/titlesActions'
import WeekdayCard from '../components/WeekdayCard'

class HomeContainer extends React.Component {

    componentDidMount() {
        // this.props.fetchEmployees()
        this.props.fetchTitles()
    }
    render(){
        // debugger
        return(
            <div>
                {/* <h1>Home Container</h1> */}
                <WeekdayCard weekday={'Monday'} titles={this.props.titles}/>
                <WeekdayCard weekday={'Tuesday'} titles={this.props.titles}/>
                <WeekdayCard weekday={'Wednesday'} titles={this.props.titles}/>
                <WeekdayCard weekday={'Thursday'} titles={this.props.titles}/>
                <WeekdayCard weekday={'Friday'} titles={this.props.titles}/>
                <WeekdayCard weekday={'Saturday'} titles={this.props.titles}/>
                <WeekdayCard weekday={'Sunday'} titles={this.props.titles}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        // employees: state.employees,
        titles: state.titles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTitles: () => dispatch(fetchTitles()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)