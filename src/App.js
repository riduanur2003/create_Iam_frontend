// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const createUser = async () => {
    try {
      const result = await axios.post('YOUR_API_GATEWAY_URL/create-user');
      setResponse(result.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.error);
      setResponse(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create IAM User</h1>
        <button onClick={createUser}>Create User</button>
        {response && (
          <div>
            <p>Username: {response.userName}</p>
            <p>Password: {response.password}</p>
          </div>
        )}
        {error && <p>Error: {error}</p>}
      </header>
    </div>
  );
}

export default App;
