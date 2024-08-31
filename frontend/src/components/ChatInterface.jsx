import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './ChatInterface.css'

const ChatInterface = ({ messages, onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onQuerySubmit(query);
      setQuery('');
    }
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto', backgroundColor: 'background.default', borderRadius: 2, fontFamily: 'Roboto, sans-serif' }}>
      <Link to="/dashboard">
        <Typography variant="h4" gutterBottom>
          <Button variant="contained" sx={{ backgroundColor: "teal" }}>Dashboard</Button>
        </Typography>
      </Link>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, backgroundColor: 'background.paper' }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'text.primary', fontFamily: 'Roboto, sans-serif' }}>
          Chat with AI
        </Typography>
        <Box sx={{ maxHeight: '400px', overflowY: 'auto', marginBottom: 2 }}>
          {messages.map((msg, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <PersonIcon sx={{ color: 'primary.main', marginRight: 1 }} />
              <Typography variant="body1" sx={{ textAlign: 'left', color: 'primary.main', flex: 1 }}>
                {msg.user}
              </Typography>
            </Box>
          ))}
          {messages.map((msg, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 1 }}>
              <Typography variant="body1" sx={{ textAlign: 'right', color: 'secondary.main', flex: 1 }}>
                {msg.bot}
              </Typography>
              <SmartToyIcon sx={{ color: 'secondary.main', marginLeft: 1 }} />
            </Box>
          ))}
        </Box>
      </Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            marginBottom: 2,
            input: { color: 'text.primary', fontFamily: 'Roboto, sans-serif' },
            label: { color: 'text.secondary', fontFamily: 'Roboto, sans-serif' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'text.secondary',
              },
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: 1 }}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ChatInterface;
