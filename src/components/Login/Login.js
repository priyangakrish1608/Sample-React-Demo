import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Form data
    axios
      .post('http://localhost:8080/user/add', data) // Replace with your backend login endpoint
      .then((response) => {
        // Successful login
        console.log('Login successful');
        navigate('/employee/', { replace: true });
      })
      .catch((error) => {
        // Login error
        console.error('Login failed:', error);
      });
  };

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="login-container">
      <div className="image-container" data-aos="fade-in" data-aos-delay="1000">
        <img src="https://www.tg.point-genie.com/girl_working.jpg/girl_working.jpg" alt="Image" />
        <h1>Welcome Back to Employee Details</h1>
        <h2>Login to Continue to your account</h2>
      </div>
      <div className="container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
  <label htmlFor="username" className="input-label">Username</label>
  <input
    type="text"
    id="username"
    placeholder="Enter your username"
    {...register('username', { required: 'Username is required' })}
  />
  {errors.username && <span className="error">{errors.username.message}</span>}
</div>
<div className="form-group">
  <label htmlFor="password" className="input-label">Password</label>
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