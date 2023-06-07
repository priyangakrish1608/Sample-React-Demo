import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './editPage.css';


const EditPage = () => {
const location = useLocation();
const [rowData, setRowData] = useState(null);
const [Id, SetID] = useState('');
const getRowDataFromQueryParams = useCallback((search, id) => {
const data = [
 { id: 1, name: 'Loy',age: '25', sex: "Female", email: 'loy@example.com', salary: '25000', department: 'Sales'},
 { id: 2, name: 'Aswin',age: '22', sex: "Male", email: 'aswin@example.com', salary: '25000', department: 'Accounts' },
 { id: 3, name: 'Preethi',age: '27', sex: "Female", email: 'preethi@example.com', salary: '27000', department: 'Testing' },
 { id: 4, name: 'Chandharan',age: '29', sex: "Male", email: 'chandharan@example.com', salary: '30000', department: 'HR' },
 {id: 5, name: 'Sreesha',age: '23', sex: "Female", email: 'sreesha@example.com', salary: '10000', department: 'Supporting'},
 {id: 6, name: 'Amutha',age: '28', sex: "Female", email: 'aumtha@example.com', salary: '15000', department: 'Supporting'},
 {id: 7, name: 'shakthi',age: '23', sex: "Male", email: 'shakthi@example.com', salary: '32000', department: 'Project Manager'}
 ];
 // Retrieve the corresponding rowData based on the id from your data source (e.g., API, Redux store)
 const rowData = data.find((e) => e.id === id) ?? {};
 return rowData;
}, []);

useEffect(() => {
const queryParams = new URLSearchParams(location.search);
const id = queryParams.get('id');
SetID(id);
const rowDataFromLocation = location.state?.rowData;
const rowDataFromQueryParams = getRowDataFromQueryParams(location.search, id);
 setRowData(rowDataFromLocation || rowDataFromQueryParams);
}, [location, getRowDataFromQueryParams]);
if (!rowData) {
return <div>Loading...</div>;
 }
return (
   <div className="container-2">Each field should not be empty*

     <div className='container' style={{ width: '700px' }}>
     <h2>{Id === '' ? 'Add' : 'Edit'} Page</h2>
     <form>
        <div>
         <label>ID:</label>
         <input type="text" value={rowData.id} readOnly />
       </div>
       <div>
          <label>Name:</label>
          <input type="text" value={rowData.name} />
       </div>
       <div>
          <label>Age:</label>
          <input type="text" value={rowData.age} />
       </div>
       <div>
          <label>Sex:</label>
          <input type="text" value={rowData.sex} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={rowData.email} />
       </div>
       <div>
        <label>Salary:</label>
          <input type="text" value={rowData.salary} />
       </div>
       <div>
          <label>Department:</label>
          <input type="text" value={rowData.department} />
        </div>
        <button type="submit">Save</button>
     </form>
   </div>
</div>
);
};
export default EditPage;