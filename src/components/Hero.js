import React from 'react';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = ({ onStart }) => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={badgeStyle}>New for 2026 Admissions</div>
        <h1 style={titleStyle}>
          Your Gateway to the <span style={highlightStyle}>University of Mpumalanga</span>
        </h1>
        <p style={subtitleStyle}>
          The UCAG system helps you calculate your APS and matches your marks 
          with official UMP requirements in seconds.
        </p>
        
        <div style={buttonGroupStyle}>
          <button onClick={onStart} style={primaryBtnStyle}>
            Check Eligibility <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </button>
          <button style={secondaryBtnStyle}>View All Programmes</button>
        </div>

        <div style={statsContainerStyle}>
          <div style={statItemStyle}><CheckCircle size={18} color="#22c55e" /> Official UMP Data</div>
          <div style={statItemStyle}><CheckCircle size={18} color="#22c55e" /> 2026 Entry Requirements</div>
        </div>
      </div>

      <div style={imageBoxStyle}>
        <div style={glassCardStyle}>
          <Calculator size={40} color="#003366" />
          <h3 style={{ margin: '10px 0' }}>Quick APS Tool</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Enter your marks to see where you stand.</p>
          <div style={loadingBarPlaceholder}></div>
        </div>
      </div>
    </div>
  );
};

// --- Styles ---
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '80px 10% ',
  background: 'linear-gradient(135deg, #f8f9ff 0%, #e2e8f0 100%)',
  minHeight: '70vh',
  flexWrap: 'wrap',
  gap: '40px'
};

const contentStyle = { flex: '1', minWidth: '300px' };

const badgeStyle = {
  display: 'inline-block',
  padding: '6px 16px',
  backgroundColor: '#ffcc00',
  color: '#003366',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  marginBottom: '20px'
};

const titleStyle = { fontSize: '3.5rem', color: '#001f3f', lineHeight: '1.1', marginBottom: '20px' };
const highlightStyle = { color: '#003366', borderBottom: '4px solid #ffcc00' };
const subtitleStyle = { fontSize: '1.2rem', color: '#4a5568', marginBottom: '30px', maxWidth: '500px' };

const buttonGroupStyle = { display: 'flex', gap: '15px', flexWrap: 'wrap' };
const primaryBtnStyle = { 
  display: 'flex', alignItems: 'center', backgroundColor: '#003366', color: 'white', 
  padding: '15px 30px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' 
};
const secondaryBtnStyle = { 
  backgroundColor: 'transparent', color: '#003366', border: '2px solid #003366', 
  padding: '15px 30px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' 
};

const statsContainerStyle = { display: 'flex', gap: '20px', marginTop: '40px' };
const statItemStyle = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#4a5568' };

const imageBoxStyle = { flex: '1', display: 'flex', justifyContent: 'center', minWidth: '300px' };
const glassCardStyle = {
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  padding: '30px',
  borderRadius: '24px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  border: '1px solid rgba(255,255,255,0.3)',
  width: '280px',
  textAlign: 'center'
};

const loadingBarPlaceholder = { height: '8px', width: '100%', backgroundColor: '#e2e8f0', borderRadius: '4px', marginTop: '15px', position: 'relative', overflow: 'hidden' };

export default Hero;