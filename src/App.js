import "./App.css";
import { useEffect, useState } from "react";
import TopMenu from "./Component/TopMenu";
import Search from "./Component/Search";
import EmployeeAdd from "./Component/EmployeeAdd";
import EmployeeList from "./Component/EmployeeList";
import EmployeeService from "./services/EmployeeService";
import { Grid, TextField } from "@mui/material";

function App() {
  const employeeService = new EmployeeService();
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [filter,setFilter]=useState("");



  const onFilterChange = (e) => {
    setFilter(e.target.value);
    console.log(filter)
    filterEmployee(filter)
  };

  const filterEmployee = async (filter) => {
    const {data}= await employeeService.getFilterEmployee(filter).then((resp) =>resp );
    return data;
  };



  useEffect(() => {
    employeeService.getAllEmployees().then((resp) => setEmployees(resp.data));
  }, [refresh]);

  return (
    <Grid fluid>
      <Grid item>

        <TextField onChange={(e)=>onFilterChange(e)}></TextField>
        <TopMenu />
        <Search/>
        <Grid container>
          <Grid item xs={8}>
            <EmployeeList
              employees={employees}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          </Grid>
          <Grid item xs={4}>
            <EmployeeAdd setRefresh={setRefresh} refresh={refresh} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
