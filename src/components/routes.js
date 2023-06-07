import React from "react";
import Login from "./Login/Login";
import Employee from "./Employee/employee";
import EditPage from "./EditPage/EditPage";

const routes = [
    {  path: "/login",
    element: <Login />,
}, {
    path: 'employee',
    element: <employee/>
},
{
    path: 'edit',
    element: <EditPage/>
},
{
    path: 'add',
    element: <EditPage/>
}
]
export default routes;