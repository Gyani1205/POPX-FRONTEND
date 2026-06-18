// Welcome.jsx — Landing page with Create Account & Login CTAs

import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import Button from '../components/Button';
import '../styles/pages.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="welcome-page">
        {/* Large empty hero section */}
        <div className="welcome-hero" />

        {/* Bottom content */}
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-desc">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>

          <div className="welcome-actions">
            <Button variant="primary" onClick={() => navigate('/register')}>
              Create Account
            </Button>
            <Button variant="secondary" onClick={() => navigate('/login')}>
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Welcome;
