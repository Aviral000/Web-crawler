import axios from 'axios';

export const fetchCrawlData = async (url, query) => {
  try {
    const response = await axios.post('http://127.0.0.1:8082/api/crawl', {
      url: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
      query
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching crawl data:', error);
    return 'Sorry, something went wrong.';
  }
};
