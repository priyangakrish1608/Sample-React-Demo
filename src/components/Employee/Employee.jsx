import React, { useState, useEffect } from 'react';
import './employee.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Employee(props) {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (rowData) => {
    navigate('/edit', { state: { rowData } });
  };

  const handleAdd = () => {
    navigate('/add');
  };

  const handleDelete = (employeeId) => {
    const apiUrl = `http://localhost:8080/employees/${employeeId}`;

    axios
      .delete(apiUrl)
      .then(() => {
        fetchEmployees(); // Fetch updated employee list after deletion
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
      });
  };

  const fetchEmployees = () => {
    const apiUrl = 'http://localhost:8080/employee';

    axios
      .get(apiUrl)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  };

  return (
    <>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        
      </div>
      <div className="table-container">
        <table style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Department</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>{item.email}</td>
                <td>{item.salary}</td>
                <td>{item.department}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    
    
  );
}

export default Employee;