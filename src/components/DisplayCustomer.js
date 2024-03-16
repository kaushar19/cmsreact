import React from "react";
 
function DisplayCustomer(props) {
  return (
    <table
      className="table table-hover bgTable shadow-sm bg-light "
      id="customers"
    >
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile Number</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map((e) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.address}</td>
            <td>{e.mobile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayCustomer;
