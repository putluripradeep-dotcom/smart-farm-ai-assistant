import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: 'Demo Farmer',
    email: 'demo@smartfarm.com',
    password: 'demo123',
    farmName: 'Green Valley Farm',
    location: 'Hyderabad',
    language: 'English'
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/signup`, form);
      localStorage.setItem('smartFarmToken', response.data.token || 'demo-token');
      localStorage.setItem('smartFarmUser', JSON.stringify(response.data.user || form));
      navigate('/dashboard');
    } catch (error) {
      localStorage.setItem('smartFarmToken', 'demo-token');
      localStorage.setItem('smartFarmUser', JSON.stringify(form));
      navigate('/dashboard');
    }
  };

  return (
    <div className="form-card">
      <h2>Create Farmer Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="field-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="field-group">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </div>

        <div className="field-group">
          <label>Farm Name</label>
          <input name="farmName" value={form.farmName} onChange={handleChange} required />
        </div>

        <div className="field-group">
          <label>Farm Location</label>
          <input name="location" value={form.location} onChange={handleChange} required />
        </div>

        <div className="field-group">
          <label>Language</label>
          <select name="language" value={form.language} onChange={handleChange}>
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
            <option>Tamil</option>
            <option>Kannada</option>
          </select>
        </div>

        <button className="primary-btn" type="submit">Create Account</button>
      </form>

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Link to="/">Already have an account? Sign in</Link>
      </div>
    </div>
  );
}
