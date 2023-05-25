import React from 'react';
import './employee.css'
function Employee(props) {
    const data = [
        { id: 1, name: 'John Doe', sex: "M", email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', sex: "M", email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', sex: "M", email: 'bob@example.com' },
        { id: 4, name: 'Alice Williams', sex: "M", email: 'alice@example.com' },
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