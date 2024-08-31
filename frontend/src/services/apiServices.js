import axios from 'axios';

export const fetchCrawlData = async (url, query) => {
  try {
    const response = await axios.post('http://127.0.0.1:8082/api/crawl', {
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
    const response = await axios.post('http://127.0.0.1:8082/user/user-feedback', {
      userData
    });
    return response.data.response;
  } catch (error) {
    return 'Sorry, something went wrong.';
  }
}