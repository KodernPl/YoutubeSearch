import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchBar from './search-bar';

const onSearchTermChangeMock = jest.fn();

beforeEach(() => {
  onSearchTermChangeMock.mockReset();
});

const renderComponent = () => {
  return mount((
    <SearchBar
      onSearchTermChange={onSearchTermChangeMock}
    />
  ));
};

test('renders correctly', () => {
  const component = renderComponent();

  expect(toJson(component)).toMatchSnapshot();
});

test('should call onSearchTermChange when text is entered', () => {
  const component = renderComponent();
  component.find('input').simulate('change', { target: { value: 'TEST' } });

  expect(onSearchTermChangeMock).toBeCalledWith('TEST');
});
