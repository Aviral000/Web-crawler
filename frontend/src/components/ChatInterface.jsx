import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Link to="/dashboard">
        <Typography variant="h4" gutterBottom>
          <Button variant="contained" sx={{ backgroundColor: "teal" }}>DashBoard</Button>
        </Typography>
      </Link>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5" gutterBottom>
          Chat with AI
        </Typography>
        <Box sx={{ maxHeight: '400px', overflowY: 'auto', marginBottom: 2 }}>
          {messages.map((msg, index) => (
            <Box key={index} sx={{ marginBottom: 1 }}>
              <Typography variant="body1" sx={{ textAlign: 'left', color: 'primary.main' }}>
                {msg.user}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'right', color: 'secondary.main' }}>
                {msg.bot}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
      <form onSubmit={handleSubmit} >
        <TextField
          fullWidth
          variant="outlined"
          label="Ask something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ marginBottom: 2 }}
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
