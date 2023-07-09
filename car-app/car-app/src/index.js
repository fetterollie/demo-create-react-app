import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#546e7a',
    },
    secondary: {
        main: '#547a73',
      },
    },
    typography: {
      fontFamily: 'Noto Sans Display',
    },
    props: {
      MuiAppBar: {
        color: 'secondary',
      },
    },
    spacing: 4,
  }
);

const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#546e7a',
    },
    secondary: {
      main: '#547a73',
      },
    },
    typography: {
      fontFamily: 'Noto Sans Display',
    },
    props: {
      MuiAppBar: {
        color: 'secondary',
      },
    },
    spacing: 4,
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

