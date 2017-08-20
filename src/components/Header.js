import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header style={{backgroundColor: (this.props.navOption === "Alumni") ? '#47a2f8' : '#ff5a5f'}}>
          <h1>{this.props.navOption} Directory</h1>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        navOption: state.navOption
    };
};

export default connect(mapStateToProps,null)(Header);
