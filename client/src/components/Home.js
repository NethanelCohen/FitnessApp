import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to the Future Feature Hub</h1>
      <div className="bubbles-container">
        <div className="bubble" onClick={() => window.open('https://www.google.com', '_blank')}>Google Search</div>
        <div className="bubble" onClick={() => window.open('https://www.youtube.com', '_blank')}>YouTube Search</div>
        <div className="bubble" onClick={() => window.open('https://www.reddit.com', '_blank')}>Reddit Search</div>
      </div>
    </div>
  );
}

export default Home;
