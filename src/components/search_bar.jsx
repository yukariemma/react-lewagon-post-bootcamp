import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // 1 - start with empty string
    this.state = {
      term: ''
    };
  }


  handleUpdate = (event) => {
    // 3 - update the state of term;
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        // 2 - user types in an input
        value={this.state.term}
        type="text"
        className='form-control form-search'
        onChange={this.handleUpdate}
      />);
  }
}

export default SearchBar;
