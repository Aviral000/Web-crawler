import axios from 'axios';

export const fetchCrawlData = async (url, query) => {
  try {
    const response = await axios.post('https://web-crawler-6kqp.onrender.com/api/crawl', {
      url: url,
      query
    });
    return response.data.response;
  } catch (error) {
    return 'Sorry, something went wrong.';
  }
};


export const userFeedback = async (userData) => {
  try {
    const response = await axios.post('https://web-crawler-6kqp.onrender.com/user/user-feedback', {
      userData
    });
    return response.data.response;
  } catch (error) {
    return 'Sorry, something went wrong.';
  }
}