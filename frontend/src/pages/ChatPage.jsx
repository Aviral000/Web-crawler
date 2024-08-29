import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import { fetchCrawlData } from '../services/apiServices';
import { Box, Container, TextField } from '@mui/material';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [url, setUrl] = useState('https://en.wikipedia.org/wiki/Artificial_intelligence');

  const handleUserQuery = async (query) => {
    const newMessages = [...messages, { user: query, bot: 'Loading...' }];
    setMessages(newMessages);

    const response = await fetchCrawlData(url, query);

    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[updatedMessages.length - 1].bot = response;
      return updatedMessages;
    });
  };
  console.log(url);

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: 'center' }}>
        <ChatInterface messages={messages} onQuerySubmit={handleUserQuery} />
        <Box mt={2}>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter URL to crawl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ChatPage;
