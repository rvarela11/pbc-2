import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  handleNavOption = (e) => {
    this.props.navClickedOption(e.target.innerHTML);
  }

  render () {
    return (
      <nav className="white">
        <div>
          <Link to="/"><img src="http://i.imgur.com/QVzzMyG.png" className="logo-image" alt="Patriot Boot Camp Logo"/></Link>
        </div>
        <ul className="nav-bar-right-section">
          <li><Link className="black-text" to="/" onClick={this.handleNavOption}>Alumni</Link></li>
          <li><Link className="black-text" to="/company" onClick={this.handleNavOption}>Company</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
