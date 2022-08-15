import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import './style.css';

const container = document.getElementById('thom-app');
const root = createRoot(container as HTMLElement);
root.render(<App />);
