import React from 'react'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class TitleCard extends React.Component {

    submit = () => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure to do delete this employee?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.props.delete(this.props.title.id)
            },
            {
              label: 'No',
              onClick: () => alert('Title has been saved')
            }
          ]
        });
      };

    render(){
        return(
            <div class="col-sm">
                <Link key={this.props.title.id} to={`/titles/${this.props.title.id}`}>{this.props.title.attributes.title_name}</Link> 
                <br />
                <button class="btn btn-outline-dark" name="delete" onClick={() => this.submit()}>Delete</button>
                {this.props.employees.filter(employee => employee.attributes.title_id === parseInt(this.props.title.id)).map(filteredEmployee => (
                    <li>{filteredEmployee.attributes.name} - {filteredEmployee.attributes.years} Years</li>
                ))}
                <br />
            </div>
        )
    }
}

export default TitleCard