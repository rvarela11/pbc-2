import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    inputMessage: ''
  }

  handleChange = (e) => {
    // this.setState({ inputMessage: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.addMessage(this.state.inputMessage);
    // this.setState({ inputMessage: '' });
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
