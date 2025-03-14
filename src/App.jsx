import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages when they're created
// import Login from './components/auth/Login';
// import Chat from './components/chat/Chat';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<div>Welcome to GamerConnect! Steam integration coming soon.</div>} />
          {/* Add more routes as you develop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;