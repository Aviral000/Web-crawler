import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import { fetchCrawlData, userFeedback } from '../services/apiServices';
import { Box, Container, TextField } from '@mui/material';
import UserDetailsPrompt from '../components/UserDetailsPrompt';
import Swal from 'sweetalert2';

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

  const handleUserDetailsSubmit = async (details) => {
    try {
      const response = await userFeedback(details);
      if(response.data.status === 500) {
        Swal.fire({
          title: 'Error!',
          text: "Make sure you don't use the same email address to send the feedback",
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      Swal.fire({
        title: 'Success!',
        text: 'Your feedback has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: "Make sure you don't use the same email address to send the feedback",
        icon: 'error',
        confirmButtonText: 'OK',
      });
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ padding: 4, backgroundColor: 'background.default' }}>
      <Box sx={{ paddingBottom: 2 }}>
        <TextField
          label="Enter URL to Crawl"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          sx={{
            marginBottom: 2,
            input: { color: 'text.primary' },
            label: { color: 'text.secondary' },
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
        <ChatInterface messages={messages} onQuerySubmit={handleUserQuery} />
        <UserDetailsPrompt onSubmit={handleUserDetailsSubmit} />
      </Box>
    </Container>
  );
};

export default ChatPage;
