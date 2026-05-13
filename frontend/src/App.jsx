import React from 'react';
import AppRoutes from './routes/routes';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Toaster toastOptions={{className:'font-sans'}} position="top-center" reverseOrder={false} />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;