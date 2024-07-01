
import React, {useEffect, useState} from "react";
import './../styles/App.css';
const baseURL = "https://reqres.in/api/users";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
      console.log(data);
    });
  }, []);
  return (
    <div>
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
        </tbody>
      </table>
    </div>
  );
};

export default App
