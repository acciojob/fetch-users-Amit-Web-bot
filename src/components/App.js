
import React, {useEffect, useState} from "react";
import Axios from "axios";
import './../styles/App.css';

const baseURL = "https://reqres.in/api/users";

let final_data;

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      final_data = response.data.data;
    });
  }, []);
  function load_data() {
    setData(final_data);
  }
  return (
    <div>
      <div>
        <h3> Blue Whales Apps </h3>
        <button onClick={load_data}>Click To Load Data</button>
      </div>      
      <table>
        <thead>
          <tr>
            <th> First Name </th>
            <th> Last Name</th>
            <th> Email </th>
            <th> Avatar </th>
          </tr>
        </thead>
        {data.length==0 ? <h3>No Data To Display</h3> :<tbody>
          {data.map((row) => {
            return (
              <Datarow
                first_name={row.first_name}
                last_name={row.last_name}
                email={row.email}
                avatar={row.avatar}
              />
            );
          })}
        </tbody>}
       
      </table>
    </div>
  );
};

export default App
