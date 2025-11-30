import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/main.scss';
import App from '@app/index';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);