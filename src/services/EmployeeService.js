import axios from "axios";
class EmployeeService{
    constructor(){
        this.baseUrl = "http://localhost:8080/api/employees/";

        }
        async getAllEmployees(){
            const {data, status} = await axios.get(this.baseUrl+"getall").then(resp => resp);
            return {data, status};
        }
    
        async deleteOneEmployee(id){
            let url = `${this.baseUrl}delete/${id}`;
            const {status} = await axios.delete(url).then(resp => resp);
            return status;
        }
    
        async postOneEmployee(body){
            const {status, data} = await axios.post(this.baseUrl+"add",body)
            .then(resp=> resp);
            return {status,data};
        }

        async getFilterEmployee(filter){
            const {data,status}= await axios.get(this.baseUrl+"getfilter?firstName="+filter).then(resp=>resp);
            console.log(data)
            return {data,status};
        }
        async updateEmployee(body){
            const {status}= await axios.put(this.baseUrl+"update/"+body.id ,body ).then(resp=>resp);
            console.log(status)
            return {status};
        }
}
export default EmployeeService;