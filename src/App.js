import { useEffect, useState } from "react";
import EmployeeService from "./services/EmployeeService";
import Topmenu from "./components/TopMenu";
import Search from "./components/Search";
import EmployeeList from "./components/EmployeeList";
import EmployeeAdd from "./components/EmployeeAdd";
import { Grid } from "@mui/material";
import EmployeeUpdate from "./components/EmployeeUpdate";

function App() {
  const employeeService = new EmployeeService();
  const [refresh, setRefresh] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");

  const handleClick = (filter) => {
    setFilter(filter);
    setRefresh(true);
  };
  

  useEffect(() => {
  employeeService.getFilterEmployee(filter).then((resp)=>setEmployees(resp.data));
}, [refresh]);


  return (
    <Grid fluid>
      <Grid item>
        <Topmenu />
        <Search 
          setEmployees={setEmployees}
        />
        <Grid container>
          <Grid item xs={4}>
            <EmployeeList
              employees={employees}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          </Grid>
          <Grid item xs={4}>
            <EmployeeAdd setRefresh={setRefresh} refresh={refresh} />
          </Grid>
          <Grid item xs={4}>
            <EmployeeUpdate setRefresh={setRefresh} refresh={refresh} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;