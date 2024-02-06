import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';

const stytch = new StytchUIClient('public-token-test-519fe6be-9684-46cb-904f-f4f5b1cf7442');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StytchProvider stytch={stytch}>
    <App />
  </StytchProvider>,
);

