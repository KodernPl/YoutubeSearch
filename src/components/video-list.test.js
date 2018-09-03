import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VideoList from './video-list';

const onVideoSelect = jest.fn();

beforeEach(() => {
  onVideoSelect.mockReset();
});

const renderComponent = () => {
  return shallow((
    <VideoList
      videos={[
        { etag: '1' },
        { etag: '2' },
      ]}
      onVideoSelect={onVideoSelect}
    />
  ));
};

test('renders correctly', () => {
  const component = renderComponent();

  expect(toJson(component)).toMatchSnapshot();
});
