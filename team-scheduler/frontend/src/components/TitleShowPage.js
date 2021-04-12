import React from 'react'
import { connect } from 'react-redux'

class TitleShowPage extends React.Component {

    render() {
        return(
            <div>
                <p>Router Show Page</p>
                <h2>{this.props.title.attributes.title_name}</h2>
                <h2>{this.props.title.attributes.description}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        titles: state.titles
    }
}

export default connect(mapStateToProps)(TitleShowPage)