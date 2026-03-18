import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#003366', padding: '1rem 2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>UMP Career Guide</h1>
      <div>
        <button style={{ background: 'none', border: 'none', color: 'white', marginRight: '20px', cursor: 'pointer' }}>Home</button>
        <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Calculator</button>
        <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;