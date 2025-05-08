import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Configuración completa de Tailwind CSS
const tailwindStyles = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = tailwindStyles;
document.head.appendChild(styleElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);