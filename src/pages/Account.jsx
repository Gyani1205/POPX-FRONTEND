// Account.jsx — Profile / Account Settings page

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import '../styles/pages.css';

// Camera icon SVG
const CameraIcon = () => (
  <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 8.5a.5.5 0 01-.5.5h-9A.5.5 0 011 8.5v-6a.5.5 0 01.5-.5h1.382L4 1h4l1.118 1.5H10.5a.5.5 0 01.5.5v6z"
      stroke="white"
      strokeWidth="0.9"
    />
    <circle cx="6" cy="5.5" r="1.6" stroke="white" strokeWidth="0.9" />
  </svg>
);

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('popx_logged_in');
    if (!loggedIn) {
      navigate('/login');
      return;
    }
    const stored = localStorage.getItem('popx_user');
    if (stored) setUser(JSON.parse(stored));
  }, [navigate]);

  if (!user) return null;

  // Get initials for placeholder avatar
  const initials = user.fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <MobileLayout>
      <div className="account-page">
        {/* Header */}
        <div className="account-header">
          <h2>Account Settings</h2>
        </div>

        {/* Profile card */}
        <div className="account-profile-card">
          <div className="avatar-container">
            <div className="avatar-placeholder">{initials}</div>
            <div className="avatar-edit" role="button" aria-label="Edit photo">
              <CameraIcon />
            </div>
          </div>

          <div className="profile-info">
            <p className="profile-name">{user.fullName}</p>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        {/* Bio text with dashed-bottom border */}
        <div className="account-bio-section">
          <p className="bio-text">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* Large gray section */}
        <div className="account-gray-section" />
      </div>
    </MobileLayout>
  );
};

export default Account;
