import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App';

const root = document.getElementById('root');

if (root) {
    const rootContainer = ReactDOM.createRoot(root);
    rootContainer.render(<App />);
} else {
    console.error('Root element not found in the document.');
}
