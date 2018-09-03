import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from './spinner';
import colors from '../styles/colors';
import breakpoints from '../styles/breakpoints';

const Video = styled.div`
  position: relative;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 0;
  }
`;

const Details = styled.div`
  padding: 2rem 0;
`;

const Title = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Paragraph = styled.div`
  padding-bottom: 0.2rem;
  color: ${colors.grey};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.grey1};

  @media ${breakpoints.landscape} {
    display: none;
  }
`;

const propTypes = {
  video: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
    }),
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
    }),
  }),
};

const defaultProps = {
  video: null,
};

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Spinner />;
  }

  const { id, snippet } = video;
  const url = `https://www.youtube.com/embed/${id.videoId}`;
  const publishedAt = (snippet && snippet.publishedAt) ? snippet.publishedAt.substr(0, 10) : '';

  return (
    <React.Fragment>
      <Video>
        <iframe src={url} title="video" />
      </Video>
      <Details>
        <Title>{snippet.title}</Title>
        <Paragraph>{snippet.description}</Paragraph>
        <Paragraph>Published at: {publishedAt}</Paragraph>
      </Details>
      <Line />
    </React.Fragment>
  );
};

VideoDetail.propTypes = propTypes;
VideoDetail.defaultProps = defaultProps;

export default VideoDetail;
