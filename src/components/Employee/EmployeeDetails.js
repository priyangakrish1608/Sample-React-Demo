import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './employeeDetails.css';

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    console.log('Employee ID:', id); // Add this line to check the ID value
    fetchEmployeeDetails();
  }, [id]);

  const fetchEmployeeDetails = () => {
    const apiUrl = `http://localhost:8080/employees/${id}`;

    axios
      .get(apiUrl)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee details:', error);
      });
  }

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>
      <p>Sex: {employee.sex}</p>
      <p>Email: {employee.email}</p>
      <p>Salary: {employee.salary}</p>
      <p>Department: {employee.department}</p>
      
    </div>
  );
}

export default EmployeeDetails;