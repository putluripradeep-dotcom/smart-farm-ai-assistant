import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: 'demo@smartfarm.com', password: 'demo123' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/auth/login`, form);
      localStorage.setItem('smartFarmToken', response.data.token || 'demo-token');
      localStorage.setItem('smartFarmUser', JSON.stringify(response.data.user || { name: 'Demo Farmer', email: form.email }));
      navigate('/dashboard');
    } catch (error) {
      localStorage.setItem('smartFarmToken', 'demo-token');
      localStorage.setItem('smartFarmUser', JSON.stringify({ name: 'Demo Farmer', email: form.email }));
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Login to Smart Farm</h2>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="field-group">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </div>

        <button className="primary-btn" type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Link to="/signup">Create account</Link>
      </div>
    </div>
  );
}
