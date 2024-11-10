\import React, { useState } from 'react';
import './App.css';
import StocksPage from './components/StocksPage';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="App min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <header className="App-header text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="App-logo w-24 h-24 mb-4"
          alt="React logo"
        />
        <p className="text-lg font-medium">
          Welcome! Customize{' '}
          <code className="bg-gray-800 px-2 py-1 rounded">src/App.js</code> and save to see changes.
        </p>
        <a
          className="App-link text-blue-400 mt-4 hover:text-blue-600"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About React
        </a>
      </header>

      {/* Toggleable Message Section */}
      <div className="mt-6">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
          onClick={toggleMessage}
        >
          {showMessage ? 'Hide' : 'Show'} Welcome Message
        </button>
        {showMessage && (
          <p className="mt-4 text-green-400 text-lg">
            Thank you for visiting! Enjoy exploring React.
          </p>
        )}
      </div>

      {/* StocksPage Component */}
      <StocksPage />
    </div>
  );
}

export default App;
