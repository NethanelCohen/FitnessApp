import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = () => {
    // Ensure you are fetching from the correct endpoint
    fetch('http://localhost:3000/')
      .then(response => response.text())
      .then(message => setMessage(message))
      .catch(err => console.error('Error fetching message:', err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Message from server: {message}</p>
        <button onClick={fetchMessage}>Netanel Cohen Message</button>
      </header>
    </div>
  );
}

export default App;
