import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VideoDetail from './video-detail';

const renderComponent = () => {
  return shallow((
    <VideoDetail
      video={{
        id: { videoId: 'ID' },
        snippet: {
          title: 'TITLE',
          description: 'DESC',
          publishedAt: 'PUB',
        },
      }}
    />
  ));
};

test('renders correctly', () => {
  const component = renderComponent();

  expect(toJson(component)).toMatchSnapshot();
});
