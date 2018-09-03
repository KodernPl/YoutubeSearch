import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VideoListItem from './video-list-item';

const onVideoSelectMock = jest.fn();

beforeEach(() => {
  onVideoSelectMock.mockReset();
});

const mockVideo = {
  snippet: {
    thumbnails: {
      medium: {
        url: 'TEST',
      },
    },
  },
};

const renderComponent = () => {
  return shallow((
    <VideoListItem
      video={mockVideo}
      onVideoSelect={onVideoSelectMock}
    />
  ));
};

test('renders correctly', () => {
  const component = renderComponent();

  expect(toJson(component)).toMatchSnapshot();
});

test('should call onVideoSelect if clicked', () => {
  const component = renderComponent();
  component.simulate('click', {});

  expect(onVideoSelectMock).toBeCalledWith(mockVideo);
});
