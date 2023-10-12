import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Provider from "./Components/Context/Provider";
import { SnackbarProvider, closeSnackbar, useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
    <SnackbarProvider maxSnack={3}
    action={(snackbarId) => (
      <IconButton component="span" onClick={() => closeSnackbar(snackbarId)}>
      <CloseIcon sx={{color:'#fff'}} />
      </IconButton>
      
    )}
    >
      <App />
    </SnackbarProvider>
    </React.StrictMode>
  </Provider>
);

