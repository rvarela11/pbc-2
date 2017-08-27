import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav className="white">
      <div>
        <Link to="/"><img src="http://i.imgur.com/QVzzMyG.png" className="logo-image" alt="Patriot Boot Camp Logo"/></Link>
      </div>
      <ul className="nav-bar-right-section">
        <li><Link className="black-text" to="/" onClick={(e) => {props.navClickedOption(e.target.innerHTML)}}>Alumni</Link></li>
        <li><Link className="black-text" to="/company" onClick={(e) => {props.navClickedOption(e.target.innerHTML)}}>Company</Link></li>
      </ul>
    </nav>
  )
}
