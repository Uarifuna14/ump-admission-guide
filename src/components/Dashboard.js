import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, [user]);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#003366' }}>Hello, {profile?.displayName || 'Student'}!</h1>
        <p style={{ color: '#666' }}>Welcome to your UMP Career & Admission Dashboard.</p>
        
        <div style={{ marginTop: '30px', padding: '20px', borderLeft: '5px solid #ffcc00', backgroundColor: '#fffdf2' }}>
          <h3>Next Steps:</h3>
          <ul>
            <li>Go to the APS Calculator to enter your marks.</li>
            <li>Check your eligibility for UMP Programmes.</li>
          </ul>
        </div>

        <button 
          onClick={() => auth.signOut()} 
          style={{ marginTop: '20px', backgroundColor: '#cc0000', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;