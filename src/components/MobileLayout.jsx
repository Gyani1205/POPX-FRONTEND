// MobileLayout.jsx — Wraps every page in the 375px mobile shell

import '../styles/pages.css';

const MobileLayout = ({ children }) => {
  return (
    <div className="mobile-layout">
      {children}
    </div>
  );
};

export default MobileLayout;
