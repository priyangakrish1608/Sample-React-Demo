import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './editPage.css';
import axios from 'axios';

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rowData, setRowData] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const rowDataFromLocation = location.state?.rowData;

      if (rowDataFromLocation) {
        console.log('rowDataFromLocation:', rowDataFromLocation);
        setRowData(rowDataFromLocation);
      } else {
        const queryParams = new URLSearchParams(location.search);
        const id = queryParams.get('id');
        console.log('id:', id);

        if (id) {
          try {
            const response = await axios.get(`http://localhost:8080/employees/${id}`);
            console.log('Response data:', response.data);
            setRowData(response.data);
          } catch (error) {
            console.error('Error fetching employee:', error);
          }
        }
      }
    };

    fetchData();
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rowData && rowData.id) {
      // Update existing employee
      const updatedEmployee = {
        id: rowData.id,
        name,
        age,
        sex,
        email,
        salary,
        department,
      };

      console.log('updatedEmployee:', updatedEmployee);

      try {
        await axios.put(`http://localhost:8080/employees/${rowData.id}`, updatedEmployee);
        console.log('Employee updated successfully');
        navigate('/employee');
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    } else {
      // Create new employee
      const newEmployee = {
        name,
        age,
        sex,
        email,
        salary,
        department,
      };

      console.log('newEmployee:', newEmployee);

      try {
        await axios.post('http://localhost:8080/employee', newEmployee);
        console.log('Employee added successfully');
        navigate('/employee');
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    }
  };

  if (!rowData || !rowData.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-2">
      Each field should not be empty*
      <div className="container" style={{ width: '700px' }}>
        <h2>{rowData.id ? 'Edit' : 'Add'} Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID:</label>
            <input type="text" value={rowData.id} readOnly />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label>Sex:</label>
            <input
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Salary:</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div>
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;