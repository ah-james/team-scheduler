import React from 'react'
import { useDispatch } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { increaseAward } from '../actions/employeesActions'


const EmployeeCard = props => {
  const dispatch = useDispatch()

  const addAward = async (employee) => {
    await dispatch(increaseAward(employee))
  }

  const handleDelete = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do delete this employee?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => props.delete(props.employee.id)
        },
        {
          label: 'No',
          onClick: () => alert('Employee has been saved')
        }
      ]
    });
  };

  return(
      <div class="col-md-3 border border-dark m-4 p-4">
          <h2>{props.employee.attributes.name}</h2>
          <img src={props.employee.attributes.image} alt="employee" />
          <p>Experience: {props.employee.attributes.years} Years</p>
          <p>Employee of the Month: {props.employee.attributes.awards}</p>
          <div class="btn-group">
              <button class="btn btn-outline-dark" name="delete" onClick={() => handleDelete()}>Fire</button>
              <button class="btn btn-outline-dark" onClick={() => props.handleEdit(props.employee)}>Edit</button>
              <button class="btn btn-outline-dark" name='award' onClick={() => addAward(props.employee)}>Award</button>
          </div>
      </div>
  )
}

export default EmployeeCard