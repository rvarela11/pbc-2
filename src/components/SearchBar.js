import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    searchInput: ''
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();

    // Uppercase the first letter of every name
    let splitName = this.state.searchInput.split(" ");
    let upperCaseName = [];
    splitName.forEach((name)=> {
      upperCaseName.push(name[0].charAt(0).toUpperCase() + name.slice(1));
    });
    this.props.searchBarName(upperCaseName.join(" "));
    this.setState({searchInput: ""});

    // Clean input search
    const search_input = document.getElementById("search");
    search_input.value = "";
  }

  render () {
    return (
      <div className="input-field">
        <form onSubmit={this.handleSubmit}>
          <input id="search" type="search" onChange={this.handleChange}/>
          <label htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </form>
      </div>
    )
  }
}

export default SearchBar;
