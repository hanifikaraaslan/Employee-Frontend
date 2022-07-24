import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'

export default function EmployeeUpdate({setRefresh, refresh}) {

  const employeeService = new EmployeeService();

  const [id,setId]=useState('');
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');

  const handleUpdate = () => {
    const employee = {
      id,
      firstName,
      lastName
    }
     employeeService.updateEmployee(employee).then(resp => {
    console.log(resp);
    setRefresh(!refresh);
  })
  }
 
 
  const onIdChange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  }

  const onFirstNameChange = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e) => {
    console.log(e.target.value);
    setLastName(e.target.value);
  }

  return (
    <div>
       <Stack direction="column" spacing={2} sx={{m:2}}>
        
    <TextField name="id" 
     onChange={(e) => onIdChange(e)}
     placeholder='id' />
     
     <TextField name="firstName" 
     onChange={(e) => onFirstNameChange(e)}
     placeholder='firstName' />

     <TextField name="lastName" 
     onChange = {(e) => onLastNameChange(e)} 
     placeholder='lastName' 
     />
     
     <Button variant='contained' onClick={() => handleUpdate()} >Add </Button>
    
    </Stack>
    </div>
  )
}
