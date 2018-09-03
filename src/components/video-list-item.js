import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoListItemWrapper = styled.li`
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Video = styled.div`
  width: 16.8rem;
  height: 9.4rem;
  flex: 0 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Paragraph = styled.div`
  margin-left: 1rem;
  font-weight: bold;
`;

const propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string,
      thumbnails: PropTypes.shape({
        medium: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
      publishedAt: PropTypes.string,
    }),
  }).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

const VideoListItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;

  return (
    <VideoListItemWrapper onClick={() => onVideoSelect(video)}>
      <Video>
        <img src={snippet.thumbnails.medium.url} alt={snippet.thumbnails.medium.url} />
      </Video>
      <Paragraph>{snippet.title}</Paragraph>
    </VideoListItemWrapper>
  );
};

VideoListItem.propTypes = propTypes;

export default VideoListItem;
