// src/pages/DashboardPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('https://web-crawler-6kqp.onrender.com/api/analytics');
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Analytics Dashboard
        </Typography>
        <List>
          {analytics.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`URL: ${item.url}`}
                secondary={`Total Queries: ${item.totalQueries}, Unique Queries: ${item.uniqueQueries}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Link to="/">
        <Typography variant="h4" gutterBottom>
          <Button variant="contained" sx={{ backgroundColor: "teal", marginTop: "2rem" }}>Home</Button>
        </Typography>
      </Link>
    </Container>
  );
};

export default DashboardPage;
