import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail 
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Auth = ({ onLoginSuccess }) => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
        onLoginSuccess();
      } 
      else if (mode === 'signup') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // This is where the 'users' collection is automatically triggered
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: name,
          email: email,
          createdAt: new Date(),
          role: 'student' // Added a role for future scalability
        });
        
        alert("Account created! Welcome to UMP Guide.");
        onLoginSuccess();
      } 
      else if (mode === 'forgot') {
        await sendPasswordResetEmail(auth, email);
        alert("Check your inbox! A password reset link has been sent.");
        setMode('login');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '20px' }}>
        {mode === 'login' ? 'Login' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {mode === 'signup' && (
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={inputStyle} 
            required 
          />
        )}
        
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={inputStyle} 
          required 
        />
        
        {mode !== 'forgot' && (
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={inputStyle} 
            required 
          />
        )}

        <button type="submit" disabled={loading} style={btnStyle}>
          {loading ? 'Processing...' : mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : 'Send Reset Link'}
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
        {mode === 'login' ? (
          <>
            <p onClick={() => setMode('signup')} style={linkStyle}>Don't have an account? Sign Up</p>
            <p onClick={() => setMode('forgot')} style={linkStyle}>Forgot Password?</p>
          </>
        ) : (
          <p onClick={() => setMode('login')} style={linkStyle}>Back to Login</p>
        )}
      </div>
    </div>
  );
};

const cardStyle = { maxWidth: '400px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '12px', backgroundColor: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };
const inputStyle = { padding: '12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' };
const btnStyle = { padding: '12px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' };
const linkStyle = { color: '#003366', cursor: 'pointer', textDecoration: 'underline', marginBottom: '5px' };

export default Auth;