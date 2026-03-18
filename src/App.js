import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', margin: 0, padding: 0, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Navbar />
      
      {!user ? (
        // What logged-out users see
        <>
          {!showLogin ? (
            <>
              <Hero />
              <div style={{ textAlign: 'center', paddingBottom: '50px' }}>
                <button onClick={() => setShowLogin(true)} style={{ padding: '15px 30px', backgroundColor: '#003366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Sign In to Save Progress
                </button>
              </div>
            </>
          ) : (
            <Auth onLoginSuccess={() => setShowLogin(false)} />
          )}
        </>
      ) : (
        // What logged-in users see
        <Dashboard />
      )}

      <footer style={{ backgroundColor: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>&copy; 2026 University of Mpumalanga Career & Admission Guide</p>
      </footer>
    </div>
  );
}

export default App;