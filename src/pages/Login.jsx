// Login.jsx — Authentication against LocalStorage credentials

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../styles/pages.css';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setAuthError('');
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const isFormValid = form.email.trim() !== '' && form.password.trim() !== '';

  const handleLogin = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.password.trim()) newErrors.password = 'Password is required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const stored = localStorage.getItem('popx_user');
      if (!stored) {
        setAuthError('No account found. Please create an account first.');
        setLoading(false);
        return;
      }
      const user = JSON.parse(stored);
      if (
        user.email === form.email.toLowerCase() &&
        user.password === form.password
      ) {
        localStorage.setItem('popx_logged_in', 'true');
        setLoading(false);
        navigate('/account');
      } else {
        setAuthError('Incorrect email or password. Please try again.');
        setLoading(false);
      }
    }, 700);
  };

  return (
    <MobileLayout>
      <div className="login-page">
        <h1 className="page-title">
          Signin to your<br />PopX account
        </h1>
        <p className="page-desc">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="login-form">
          {authError && (
            <div className="form-error-toast">{authError}</div>
          )}

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="marry@example.com"
            error={errors.email}
            autoComplete="email"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            error={errors.password}
            autoComplete="current-password"
          />
        </div>

        <div className="login-footer">
          <Button
            variant="primary"
            onClick={handleLogin}
            disabled={!isFormValid}
            loading={loading}
          >
            Login
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Login;
