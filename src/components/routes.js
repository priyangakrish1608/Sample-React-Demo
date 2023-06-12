import React from "react";
import Login from "./Login/Login";
import Employee from "./Employee/Employee";
import EditPage from "./EditPage/EditPage";
import AddPage from "./AddPage/AddPage";

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
      path: '/edit',
      element: <EditPage/>
    },
    {
      path: '/add',
      element: <AddPage/>
    }
  ];
  
  export default routes;