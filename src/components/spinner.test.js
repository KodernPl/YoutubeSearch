import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from './spinner';

const renderComponent = () => {
  return shallow((
    <Spinner />
  ));
};

test('renders correctly', () => {
  const component = renderComponent();

  expect(toJson(component)).toMatchSnapshot();
});
