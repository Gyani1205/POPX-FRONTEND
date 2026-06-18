// Register.jsx — Account creation with validation & LocalStorage persistence

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import Button from '../components/Button';
import InputField from '../components/InputField';
import '../styles/pages.css';

// Validation helpers
const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone) =>
  /^[+]?[\d\s\-()]{7,15}$/.test(phone);

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Save to LocalStorage
      const userData = {
        fullName: form.fullName,
        phone: form.phone,
        email: form.email.toLowerCase(),
        password: form.password,
        companyName: form.companyName,
        isAgency: form.isAgency,
      };
      localStorage.setItem('popx_user', JSON.stringify(userData));
      localStorage.setItem('popx_logged_in', 'true');
      setLoading(false);
      navigate('/account');
    }, 800);
  };

  return (
    <MobileLayout>
      <div className="register-page">
        <h1 className="page-title">
          Create your<br />PopX account
        </h1>
        <p className="page-desc">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="form-section">
          <InputField
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            required
            error={errors.fullName}
            autoComplete="name"
          />
          <InputField
            label="Phone number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 99999 99999"
            required
            error={errors.phone}
            autoComplete="tel"
          />
          <InputField
            label="Email address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="marry@example.com"
            required
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
            required
            error={errors.password}
            autoComplete="new-password"
          />
          <InputField
            label="Company name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Acme Inc."
            autoComplete="organization"
          />

          {/* Agency radio question */}
          <div className="agency-question">
            <p className="agency-label">
              Are you an Agency?<span>*</span>
            </p>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Fixed-bottom create account button */}
        <div className="register-footer">
          <Button
            variant="primary"
            onClick={handleSubmit}
            loading={loading}
          >
            Create Account
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Register;
