import axios from 'axios';

const URL = 'https://www.googleapis.com/youtube/v3/search';

const YoutubeSearch = (options, callback) => {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video',
  };

  axios.get(URL, { params })
    .then((response) => {
      if (callback) { callback(response.data.items); }
    })
    .catch((error) => {
      console.error(error); // eslint-disable-line no-console
    });
};

export default YoutubeSearch;
