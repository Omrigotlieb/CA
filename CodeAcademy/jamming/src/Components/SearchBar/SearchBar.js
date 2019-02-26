import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    searchBarTerm: ''
  };
  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
}

  search() {
    this.props.onSearch(this.state.searchBarTerm);
  }

  handleTermChange(event) {
    let searchBarTerm = event.target.value;
    this.setState({searchBarTerm});
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
