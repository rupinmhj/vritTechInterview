import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]); // Holds the user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data); // Set the user data
      } catch (err) {
        setError(err.message); // Set the error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUsers(); // Call the fetch function
  }, []);

  if (loading) return <p>Loading...</p>; // Show loading message
  if (error) return <p>Error: {error}</p>; // Show error message

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li> // Display each user name
      ))}
    </ul>
  );
};

export default UserList;