import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './employee.css';
import EmployeeDetails from './EmployeeDetails';

function Employee(props) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const navigate = useNavigate();

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
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  };

  return (
    <>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        
      </div>
      <div className="table-container" style={{ marginTop: '20px', border: '1px solid black' }}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Department</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>{item.email}</td>
                <td>{item.salary}</td>
                <td>{item.department}</td>
                <td>
                  <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                </td>
                <td>
                  <Link to={`/employees/${item.id}`} className="view-button">View</Link>
                </td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Routes>
      <Route
  path="/employees/:id"
  element={<EmployeeDetails />}
/>
      </Routes>
    </>
  );
}

export default Employee;