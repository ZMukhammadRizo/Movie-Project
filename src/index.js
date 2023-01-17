import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import GlobeStyle from './GlobeStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobeStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
