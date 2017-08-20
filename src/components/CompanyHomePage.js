import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navClickedOption } from '../actions/index';

// Components

import Nav from './Nav';
import Header from './Header';

class CompanyHomePage extends Component {
  render() {
    return <div>
      <Nav navClickedOption={this.props.navClickedOption}/>
      <Header/>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        navClickedOption: (navOption) => dispatch(navClickedOption(navOption))
    };
};

export default connect(null, mapDispatchToProps)(CompanyHomePage);
