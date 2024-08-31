import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import DashboardPage from './pages/DashboardPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#1e1e1e',
      paper: '#2d2d2d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
