import React, { useState } from 'react';

const APSCalculator = () => {
  const [score, setScore] = useState(0);
  const [marks, setMarks] = useState({
    english: 0,
    math: 0,
    lo: 0,
    sub4: 0,
    sub5: 0,
    sub6: 0,
    sub7: 0
  });

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: parseInt(e.target.value) || 0 });
  };

  const calculateAPS = () => {
    // UMP Rule: LO is divided by 2
    const loScore = Math.floor(marks.lo / 2);
    const total = marks.english + marks.math + loScore + marks.sub4 + marks.sub5 + marks.sub6 + marks.sub7;
    setScore(total);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '20px auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#003366', textAlign: 'center' }}>APS Calculator</h2>
      <p style={{ textAlign: 'center', color: '#666' }}>Enter your level (1-7) for each subject</p>
      
      <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        <div>
          <label>English: </label>
          <input type="number" name="english" onChange={handleChange} style={inputStyle} min="1" max="7" />
        </div>
        <div>
          <label>Math / Math Literacy: </label>
          <input type="number" name="math" onChange={handleChange} style={inputStyle} min="1" max="7" />
        </div>
        <div>
          <label>Life Orientation: </label>
          <input type="number" name="lo" onChange={handleChange} style={inputStyle} min="1" max="7" />
        </div>
        <p style={{ fontSize: '0.8rem', color: '#888' }}>+ Enter 4 more subjects</p>
        <div style={{ display: 'flex', gap: '10px' }}>
            <input type="number" name="sub4" onChange={handleChange} style={inputStyle} placeholder="Sub 4" />
            <input type="number" name="sub5" onChange={handleChange} style={inputStyle} placeholder="Sub 5" />
            <input type="number" name="sub6" onChange={handleChange} style={inputStyle} placeholder="Sub 6" />
            <input type="number" name="sub7" onChange={handleChange} style={inputStyle} placeholder="Sub 7" />
        </div>
        
        <button onClick={calculateAPS} style={{ backgroundColor: '#003366', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
          Calculate Total APS
        </button>

        {score > 0 && (
          <div style={{ marginTop: '20px', textAlign: 'center', padding: '15px', backgroundColor: '#ffcc00', borderRadius: '5px' }}>
            <h3 style={{ margin: 0 }}>Your APS Score: {score}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginTop: '5px'
};

export default APSCalculator;