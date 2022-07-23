import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmployeeService from '../services/EmployeeService';
import {Grid} from "@mui/material";


export default function Search(refresh, setRefresh) {
 const employeeService = new EmployeeService();

 const [str, setStr] = useState("");
//  const [employees, setEmployees] = useState([]);


 const onFilterChange = (e) => {
  setStr(e.target.value);
  console.log(str)
  setEmployees(filterEmployee(str))
  console.log(employees)
};

 const filterEmployee = async (str) => {
  const {data}= await employeeService.getFilterEmployee(str).then((resp) =>resp );
  return data;
};




  return (

   
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, md: 3}}>
    <Grid item xs={6}>
      <Grid Item >
      <Box
      sx={{
        m:2,
        maxWidth: '100%',
      }}
    >
      <TextField onChange={(e) => onFilterChange(e)} fullWidth label="Filter" id="fullWidth" />
    
    </Box>
      </Grid>
    </Grid>
    
    <Grid item xs={6}>
      <Grid Item>
      </Grid>
    </Grid>
  </Grid>
     
   
   
 
    
  );
}