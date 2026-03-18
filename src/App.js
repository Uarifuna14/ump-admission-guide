import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      {/* We will add the Calculator component here next! */}
      
      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center', marginTop: '4rem' }}>
        <p>&copy; 2026 University of Mpumalanga Career & Admission Guide</p>
      </footer>
    </div>
  );
}

export default App;