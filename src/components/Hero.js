import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <header style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Secure Your Future at UMP</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
        Don't guess your future. Use the UMP Career and Admission Guide (UCAG) to check your eligibility 
        for undergraduate programmes based on your matric results.
      </p>
      <button style={{ backgroundColor: '#ffcc00', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
        Start APS Calculation <ChevronRight size={20} style={{ marginLeft: '10px' }} />
      </button>
    </header>
  );
};

export default Hero;