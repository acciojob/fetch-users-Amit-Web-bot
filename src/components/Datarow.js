import React from "react";

const Datarow = (props) => {
  return (
    <>
       <tr>
        <td> {props.first_name}</td>
        <td> {props.last_name}</td>
        <td> {props.email}</td>
        <td> <img src={props.avatar}></img></td>
      </tr>
    </>
  );
};

export default Datarow;
