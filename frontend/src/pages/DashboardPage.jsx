import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Paper, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

  const chartData = analytics.map(item => ({
    url: item.url,
    totalQueries: item.totalQueries,
    uniqueQueries: item.uniqueQueries,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Paper elevation={3} sx={{ padding: 1 }}>
          <Typography variant="body2">{`URL: ${payload[0].payload.url}`}</Typography>
          <Typography variant="body2">{`Total Queries: ${payload[0].value}`}</Typography>
          {payload[1] && <Typography variant="body2">{`Unique Queries: ${payload[1].value}`}</Typography>}
        </Paper>
      );
    }

    return null;
  };

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

      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Queries Per URL
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="url" tick={false} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="totalQueries" fill="#8884d8" />
            <Bar dataKey="uniqueQueries" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
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
