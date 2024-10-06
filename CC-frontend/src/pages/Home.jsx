import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectCurrenttoken } from '../state/store';

const Home = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const token = useSelector(selectCurrenttoken) || localStorage.getItem('token');
  
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true); // Set loading to true when starting the fetch
      try {
        const response = await axios.get("http://localhost:8000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setUserProfile(response.data);
      } catch (error) {
        console.log('Error fetching profile:', error);
        setError(error); // Store the error
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching profile: {error.message}</div>;
  }

  return (
    <div>
      Welcome {userProfile.name || "User"}<br />
      Admin: {userProfile.admin ? "True" : "False"}
    </div>
  );
}

export default Home;
