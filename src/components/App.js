
import React, {useEffect, useState} from "react";
import Datarow from "./Datarow";
import axios from "axios";
import './../styles/App.css';

const baseURL = "https://reqres.in/api/users";

let final_data;

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState("")
  
  
  const load_data = async ()=>{
    setLoading(true)
    setError("")
    try{
      const response = await axios.get(baseURL)
      setData(response.data.data)
    }catch(error){
      setError("Error Loading data")
    }finally{
      setLoading(false)
    }

  }
   
  return (
    <div>
       <h3> Blue Whales Apps </h3>
        <button className= "btn" onClick={load_data}>Get User List</button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && users.length === 0 && <p>No data found</p>}  
      <table>
        <thead>
          <tr>
            <th> First Name </th>
            <th> Last Name</th>
            <th> Email </th>
            <th> Avatar </th>
          </tr>
        </thead>
        <tbody>
        {data.length > 0 ?
          data.map((row) => {
            return (
              <Datarow
                first_name={row.first_name}
                last_name={row.last_name}
                email={row.email}
                avatar={row.avatar}
              />
            );
          }): (
            <tr>
              <td colSpan="4">No data found to display.</td>
            </tr>
          )}
          </tbody>
      </table>
    </div>
  );
};

export default App
