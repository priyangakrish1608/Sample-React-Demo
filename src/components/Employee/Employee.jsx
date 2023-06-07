import React, { useEffect } from 'react';
import './employee.css';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../../services/EmployeeService';
//import { Link } from 'react-router-dom';

function Employee(props) {
  const navigate = useNavigate();
  useEffect(() => {
    EmployeeService.getAllemployee().then((response) => {
      Employee(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    })
  }, [])
   const data = [
   { id: 1, name: 'Loy',age: '25', sex: "Female", email: 'loy@example.com', salary: '25000', department: 'Sales'},
   { id: 2, name: 'Aswin',age: '22', sex: "Male", email: 'aswin@example.com', salary: '25000', department: 'Accounts' },
   { id: 3, name: 'Preethi',age: '27', sex: "Female", email: 'preethi@example.com', salary: '27000', department: 'Testing' },
   { id: 4, name: 'Chandharan',age: '29', sex: "Male", email: 'chandharan@example.com', salary: '30000', department: 'HR' },
   {id: 5, name: 'Sreesha',age: '23', sex: "Female", email: 'sreesha@example.com', salary: '10000', department: 'Supporting'},
   {id: 6, name: 'Amutha',age: '28', sex: "Female", email: 'aumtha@example.com', salary: '15000', department: 'Supporting'},
   {id: 7, name: 'shakthi',age: '23', sex: "Male", email: 'shakthi@example.com', salary: '32000', department: 'Project Manager'}
   ];

  const handleEdit = (rowData) => {
  // You can handle the navigation logic to the edit page here
  // For example, you can use React Router to navigate and pass the rowData as a parameter
  // Replace '/edit' with the actual route/path of your edit page
  // rowData can be accessed on the edit page using props.location.state
  // You can pass additional data as needed
  navigate('/edit', { state: { rowData } });
 };
  const handleAdd = () => {
 // You can handle the navigation logic to the edit page here
 // For example, you can use React Router to navigate and pass the rowData as a parameter
 // Replace '/edit' with the actual route/path of your edit page
 // rowData can be accessed on the edit page using props.location.state
 // You can pass additional data as needed
 navigate('/add');
 };

 return (
 <>
  <div style={{ textAlign: 'right', marginTop: '20px' }}>
  <button onClick={handleAdd} >Add</button>
  </div>
  <div className="table-container">
   <table style={{marginTop: '20px'}}>
       <thead>
         <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Department</th>
            <th colSpan={2} >Actipons</th>
         </tr>
       </thead>

     <tbody>
        {data.map((item) => (
           <tr key={item.id}>
           <td>{item.id}</td>
           <td>{item.name}</td>
           <td>{item.age}</td>
           <td>{item.sex}</td>
           <td>{item.email}</td>
           <td>{item.salary}</td>
           <td>{item.department}</td>
           <td><button onClick={() => handleEdit(item)}>Edit</button></td>
           <td><button onClick={() => handleEdit(item)}>Delete</button></td></tr>
         ))}
      </tbody>
  </table>
 </div>
</>
);
}
export default Employee;