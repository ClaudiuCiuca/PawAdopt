import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './index.css'
import App from './App.tsx'

import { AuthContextProvider } from './features/Auth/context/AuthContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
    <App />
    <ToastContainer position="top-right" autoClose={2500} />
    </AuthContextProvider>
  </StrictMode>
);
