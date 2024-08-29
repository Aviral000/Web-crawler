import axios from 'axios';

export const fetchCrawlData = async (url, query) => {
  try {
    const response = await axios.post('https://web-crawler-6kqp.onrender.com/api/crawl', {
      url: url,
      query
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching crawl data:', error);
    return 'Sorry, something went wrong.';
  }
};
