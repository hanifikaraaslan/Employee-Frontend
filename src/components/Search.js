import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmployeeService from "../services/EmployeeService";

export default function Search({ setEmployees }) {
 
  const employeeService = new EmployeeService();

  const handleSearch = (e) => {
    employeeService
      .getFilterEmployee(e.target.value)
      .then((resp) => {
        setEmployees(resp.data);
      });
  };

  // const [filter, setFilter] = useState("");


  //  const onFilterChange= (e)=>{
  // setFilter(e.target.value)
  //  }


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
      <TextField key="filter" fullWidth label="Search" id="fullWidth" onChange={(e) => handleSearch(e)} 
      />
       {/* <button onClick={event => handleClick(filter)} > Ara </button>  */}
    </Box>
  );
}