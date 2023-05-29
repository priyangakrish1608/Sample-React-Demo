import React from 'react';
import { useForm } from 'react-hook-form';
import './login.css';
import {  useNavigate } from 'react-router-dom';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Form data
    navigate("/employee/", { replace: true });
  };

  return (
    <div className="container-1">WELCOME TO MANULIFE!!
    
       
      
    <div className="container" style={{width:'500px'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <span className="error">{errors.username.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  </div>
  
  );
};

export default Login;
