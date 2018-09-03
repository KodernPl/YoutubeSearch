import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../styles/colors';

const SearchBarWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.8rem;
  border: 1px solid ${colors.grey1};
  padding: 1rem;
`;

const propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onInputChange = (event) => {
    const term = event.target.value;

    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <SearchBarWrapper>
        <Input
          placeholder="Enter Search"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </SearchBarWrapper>
    );
  }
}
SearchBar.propTypes = propTypes;

export default SearchBar;
