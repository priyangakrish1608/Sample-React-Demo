import React from "react";
import Login from "./Login/Login";
import Employee from "./Employee/Employee";
import EmployeeDetails from "./Employee/EmployeeDetails";
import EditPage from "./EditPage/EditPage";
import AddPage from "./AddPage/AddPage";


import HomePage from "./HomePage/HomePage";

const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: '/employee',
      element: <Employee/>
    },
    {
      path: '/employees/:id', // Update the path to include the parameter
      element: <EmployeeDetails />,
    },
    {
      path: '/edit',
      element: <EditPage/>
    },
    
    {
      path: '/add',
      element: <AddPage/>
    },
    {
      path: '/home',
      element: <HomePage/>
    }
  ];
  
  export default routes;