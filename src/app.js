import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import YoutubeSearch from './utils/youtube-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import Config from './config';

import './styles/normalize.css';
import colors from './styles/colors';
import breakpoints from './styles/breakpoints';

const AppWrapper = styled.div`
  max-width: 170rem;
  margin: 0 auto;
  padding: 2.4rem;
  color: ${colors.black};
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.landscape} {
    flex-direction: row;
  }
`;

const VideoBox = styled.div`
  max-width: 95rem;
  width: 100%;
  margin: 0 auto;

  @media ${breakpoints.landscape} {
    flex-direction: row;
    max-width: 100%;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.videoSearch('Metallica');
  }

  videoSearch(term) {
    YoutubeSearch({ key: Config.YT_API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  apiKeyExists = () => !!Config.YT_API_KEY.length;

  selectVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return (
      <AppWrapper>
        {this.apiKeyExists() ?
          <React.Fragment>
            <SearchBar onSearchTermChange={videoSearch} />
            <Main>
              <VideoBox>
                <VideoDetail video={this.state.selectedVideo} />
              </VideoBox>
              <VideoList
                onVideoSelect={this.selectVideo}
                videos={this.state.videos}
              />
            </Main>
          </React.Fragment>
          :
          <div>YouTube API Key Missing</div>
        }
      </AppWrapper>
    );
  }
}

export default App;
