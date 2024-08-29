import React, { useLayoutEffect, useRef, useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';
import { gsap } from 'gsap';

const ChatInterface = ({ messages, onQuerySubmit }) => {
  const [query, setQuery] = useState('');
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);

  useLayoutEffect(() => {
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onQuerySubmit(query);
      setQuery('');
    }
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }} ref={chatBoxRef}>
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
      <form onSubmit={handleSubmit} ref={inputRef}>
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
