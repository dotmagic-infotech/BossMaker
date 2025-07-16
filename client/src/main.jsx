import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// chakra-ui
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext.jsx';
const { ToastContainer, toast } = createStandaloneToast()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);


toast({ title: 'Chakra UI' })