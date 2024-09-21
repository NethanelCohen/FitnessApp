import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <Link className={`menu-item ${location.pathname === '/home' ? 'active' : ''}`} to="/home">Home</Link>
      <Link className={`menu-item ${location.pathname === '/workouts' ? 'active' : ''}`} to="/workouts">Workouts</Link>
      <Link className={`menu-item ${location.pathname === '/settings' ? 'active' : ''}`} to="/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
