import React , { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search({handleClick}) {
  const [filter, setFilter] = useState("");


  const onFilterChange= (e)=>{
 setFilter(e.target.value)
  }


// useEffect((employees, filter)=> { return employees.filter(emp=>
//   emp.FirstName)

// })
// console.log(filter)

  return (
    <Box
      sx={{
        m:2,
        maxWidth: '100%',
      }}
    >
      <TextField key="filter" fullWidth label="Search" id="fullWidth" onChange={(e)=>onFilterChange(e)} 
      />
      /* <button onClick={event => handleClick(filter)} > Ara </button> */
    </Box>
  );
}