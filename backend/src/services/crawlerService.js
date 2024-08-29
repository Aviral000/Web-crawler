const axios = require('axios');
const cheerio = require('cheerio');

const crawlWebsite = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const content = {
      text: $('body').text(),
      links: [],
      images: []
    };

    $('a').each((i, link) => {
      content.links.push($(link).attr('href'));
    });

    $('img').each((i, img) => {
      content.images.push($(img).attr('src'));
    });

    return content;
  } catch (error) {
    console.error(`Error crawling website: ${error.message}`);
    throw new Error('Crawling failed');
  }
};

module.exports = {
  crawlWebsite
};
