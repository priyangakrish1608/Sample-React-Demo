import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
const {register, handleSubmit,
formState: { errors },} = useForm();
const navigate = useNavigate();

const onSubmit = (data) => {
 console.log(data); // Form data
 axios.post('http://localhost:8080/api/login', data)
 .then(response => {
 console.log(response.data); // Handle the response from the server
 navigate("/employee/", { replace: true });

  })
 .catch(error => {
  console.error(error); // Handle any errors that occur during the request
 });
};

return (
   <div>
     <div className='container'>


    <h2>Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">

            <label htmlFor="username">Username</label>

            <input

             type="text"

             id="username"

             placeholder="Enter your username"{...register('username', { required: 'Username is required' })}/>
             {errors.username && <span className="error">{errors.username.message}</span>}
        </div>

        <div className="form-group">

            <label htmlFor="password">Password</label>

             <input type="password"
              id="password"
              placeholder="Enter your password"{...register('password', { required: 'Password is required' })}/>
              {errors.password && <span className="error">{errors.password.message}</span>}
        </div>
        <button type="submit">Log In</button>
   </form>
</div>
</div>
);
};
export default Login;
