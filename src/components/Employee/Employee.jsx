import React from 'react';
import './employee.css'
function Employee(props) {
    const data = [
        { id: 1, name: 'Loy', sex: "Female", email: 'loy@example.com', salary: '15000', department: 'Sales'},
        { id: 2, name: 'Aswin', sex: "Male", email: 'aswin@example.com', salary: '25000', department: 'Accounts' },
        { id: 3, name: 'Preethi', sex: "Female", email: 'preethi@example.com', salary: '27000', department: 'Testing' },
      
      ];
      const handleEdit = (rowData) => {
        // You can handle the navigation logic to the edit page here
        // For example, you can use React Router to navigate and pass the rowData as a parameter
        // Replace '/edit' with the actual route/path of your edit page
        // rowData can be accessed on the edit page using props.location.state
        // You can pass additional data as needed
        window.location.href = `/edit?id=${rowData.id}`;
      };
      const handleAdd = () => {
        // You can handle the navigation logic to the edit page here
        // For example, you can use React Router to navigate and pass the rowData as a parameter
        // Replace '/edit' with the actual route/path of your edit page
        // rowData can be accessed on the edit page using props.location.state
        // You can pass additional data as needed
        window.location.href = `/add?id=''`;
      };
    return (
        <>
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <button onClick={handleAdd} >Add</button>
        </div>
        <div className="table-container">
      <table style={{  marginTop: '20px'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Actipons</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.sex}</td>
              <td>{item.email}</td>
              <td>{item.salary}</td>
              <td>{item.department}</td>
              <td><button onClick={() => handleEdit(item)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    );
}

export default Employee;