import React from 'react';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <span style={{ fontWeight: 'bold', color: '#003366' }}>UMP</span> Guide
      </div>
      <div style={linksStyle}>
        <a href="/" style={linkItem}>Home</a>
        <a href="#about" style={linkItem}>About</a>
        <button onClick={onLoginClick} style={loginBtnStyle}>Student Login</button>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 10%',
  backgroundColor: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  position: 'sticky',
  top: '0',
  zIndex: '1000'
};

const logoStyle = { fontSize: '1.5rem', cursor: 'pointer' };
const linksStyle = { display: 'flex', alignItems: 'center', gap: '30px' };
const linkItem = { textDecoration: 'none', color: '#4a5568', fontWeight: '500' };
const loginBtnStyle = {
  backgroundColor: '#ffcc00',
  color: '#003366',
  padding: '10px 20px',
  borderRadius: '6px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Navbar;