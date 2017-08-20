import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navClickedOption } from '../actions/index';

// Components

import Nav from './Nav';
import Header from './Header';
import SearchBar from './SearchBar';

class AlumniHomePage extends Component {
  render() {
    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header/>
        <div className="container-search-filters">
          <SearchBar addMessage={this.props.addMessage}/>
        </div>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navClickedOption: (navOption) => dispatch(navClickedOption(navOption))
    };
};

export default connect(null, mapDispatchToProps)(AlumniHomePage);
