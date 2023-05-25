import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './editPage.css'

const EditPage = () => {
  const location = useLocation();
  const [rowData, setRowData] = useState(null);
  const [Id, SetID] = useState('');

  const getRowDataFromQueryParams = useCallback((search) => {
    const data = [
      { id: 1, name: 'John Doe', sex: "M", email: 'john@example.com', salary: '15000', department: 'Sales' },
      { id: 2, name: 'Jane Smith', sex: "M", email: 'jane@example.com', salary: '25000', department: 'Accounts'  },
      { id: 3, name: 'Bob Johnson', sex: "M", email: 'bob@example.com', salary: '27000', department: 'Testing'},
      { id: 4, name: 'Alice Williams', sex: "M", email: 'alice@example.com', salary: '30000', department: 'HR'  },
    ];
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id');
    SetID(id);
    console.log(id);
    console.log(Id);

    // Retrieve the corresponding rowData based on the id from your data source (e.g., API, Redux store)
    const rowData = data.find((e) => e.id === id) ?? {};
    return rowData;
  }, [Id]);

  useEffect(() => {
    const rowDataFromLocation = location.state?.rowData;
    const rowDataFromQueryParams = getRowDataFromQueryParams(location.search);
    console.log(new URLSearchParams(location.search).get('id'));
    setRowData(rowDataFromLocation || rowDataFromQueryParams);
  }, [location, getRowDataFromQueryParams]);

  if (!rowData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{new URLSearchParams(location.search).get('id') === '' ? 'Add' : 'Edit'} Page</h2>
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
  );
};

export default EditPage;