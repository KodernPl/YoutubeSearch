import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './app';

jest.mock('./utils/youtube-search', () => {
  return jest.fn();
});

const renderComponent = () => {
  return shallow(<App />);
};

test('renders correctly', () => {
  jest.mock('./config', () => ({
    YT_API_KEY: '1',
  }));
  const component = renderComponent();
  expect(toJson(component)).toMatchSnapshot();
});
