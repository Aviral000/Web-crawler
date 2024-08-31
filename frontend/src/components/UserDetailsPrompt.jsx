import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';

const UserDetailsPrompt = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState({ name: '', email: '', feedback: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      name: details.name,
      email: details.email,
      feedback: details.feedback,
    };

    onSubmit(userDetails);

    setDetails({ name: '', email: '', feedback: '' });

    Swal.fire({
      title: 'Success!',
      text: 'Your feedback has been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Paper elevation={3} sx={{
      padding: 3,
      marginTop: 2,
      backgroundColor: 'background.paper',
      color: 'text.primary',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      maxWidth: 400,
    }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom>
          We value your feedback
        </Typography>
        <IconButton onClick={handleClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={details.name}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
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
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={details.email}
          onChange={handleChange}
          margin="normal"
          required
          sx={{
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
        <TextField
          fullWidth
          label="Feedback"
          name="feedback"
          value={details.feedback}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
          sx={{
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
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default UserDetailsPrompt;
