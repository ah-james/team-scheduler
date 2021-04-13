import React from 'react'
import { connect } from 'react-redux'

class TitleShowPage extends React.Component {

    render() {
        let titleDetails = this.props.titles.filter( t => t.id == this.props.match.params.id);
        return(
            <div>
                {/*  */}
                <p>Router Show Page</p>
                <h2>{titleDetails[0].attributes.title_name}</h2>
                <h2>{titleDetails[0].attributes.description}</h2>
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