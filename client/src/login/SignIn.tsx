import React, { useState } from 'react';
import { apiFetch } from '../api';
import { User } from './User';
import { Link, useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch('/auth/signin', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      navigate('/');
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div className="sign-in">
      <h2>Welcome to articles database</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="on"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* TODO: Add eye icon for reveling password and use same component on signin and signup */}
        <button type="submit">Log In</button>
        <div>
          Have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
