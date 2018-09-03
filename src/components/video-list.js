import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideoListItem from './video-list-item';

import breakpoints from '../styles/breakpoints';

const VideoListlWrapper = styled.ul`
  padding: 0;
  margin: 2.4rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.landscape} {
    min-width: 45rem;
    max-width: 45rem;
    margin: 0 0 0 2.4rem;
  }
`;

const propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({ etag: PropTypes.string })),
  onVideoSelect: PropTypes.func.isRequired,
};

const defaultProps = {
  videos: [],
};

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <VideoListlWrapper>
      {videoItems}
    </VideoListlWrapper>
  );
};

VideoList.propTypes = propTypes;
VideoList.defaultProps = defaultProps;

export default VideoList;

