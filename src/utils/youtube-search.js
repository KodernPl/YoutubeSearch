import axios from 'axios';

const URL = 'https://www.googleapis.com/youtube/v3/search';

const YoutubeSearch = async (options) => {
  if (!options.key) {
    throw new Error('API_KEY needs to be provided');
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video',
  };

  try {
    const res = await axios.get(URL, { params });
    return res.data.items;
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    return [];
  }
};

export default YoutubeSearch;
