import React from 'react'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const TitleCard = props => {

  const submit = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do delete this employee?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => props.delete(props.title.id)
        },
        {
          label: 'No',
          onClick: () => alert('Title has been saved')
        }
      ]
    });
  };

  return(
    <div class="col-sm">
        <Link key={props.title.id} to={`/titles/${props.title.id}`}>{props.title.attributes.title_name}</Link> 
        <br />
        <button class="btn btn-outline-dark" name="delete" onClick={() => submit()}>Delete</button>
        {props.employees.filter(employee => employee.attributes.title_id === parseInt(props.title.id)).map(filteredEmployee => (
          <li>{filteredEmployee.attributes.name} - {filteredEmployee.attributes.years} Years</li>
        ))}
        <br />
    </div>
  )
}

export default TitleCard