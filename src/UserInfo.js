import React from 'react';
import './UserInfo.css'; // Import your custom CSS file

const UserInfo = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  return (
    <div className="user-info-container">
      <h2>Demo Project</h2>
      <div className="user-detail">
        <strong>Name:</strong> {userDetails.name}
      </div>
      <div className="user-detail">
        <strong>Age:</strong> {userDetails.age}
      </div>
      <div className="user-detail">
        <strong>City:</strong> {userDetails.city}
      </div>
      <div className="user-detail">
        <strong>State:</strong> {userDetails.state}
      </div>
      <div className="user-detail">
        <strong>Country:</strong> {userDetails.country}
      </div>
    </div>
  
  );
};

export default UserInfo;
