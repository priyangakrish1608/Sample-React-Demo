import React from "react";
import Login from "./Login/Login";
import Employee from "./Employee/Employee";
import EditPage from "./EditPage/EditPage";

const routes = [
    {  path: "/login",
    element: <Login />,
}, {
    path: 'employee',
    element: <Employee/>
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