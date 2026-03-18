import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('home'); // 'home' or 'auth'

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Function to show login screen
  const showLogin = () => setView('auth');
  const showHome = () => setView('home');

  return (
    <div style={{ fontFamily: '"Inter", sans-serif', margin: 0, padding: 0 }}>
      <Navbar onLoginClick={showLogin} />
      
      {!user ? (
        // Visitor View
        view === 'home' ? (
          <Hero onStart={showLogin} />
        ) : (
          <div style={{ padding: '40px 0' }}>
             <button onClick={showHome} style={{ marginLeft: '10%', cursor: 'pointer', background: 'none', border: 'none', color: '#003366', textDecoration: 'underline' }}>← Back to Home</button>
             <Auth onLoginSuccess={() => setView('home')} />
          </div>
        )
      ) : (
        // Logged In View
        <Dashboard />
      )}

      <footer style={{ backgroundColor: '#001f3f', color: 'white', padding: '40px 10%', textAlign: 'center' }}>
        <p>&copy; 2026 University of Mpumalanga Career Guide. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;