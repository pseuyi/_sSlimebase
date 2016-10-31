import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Navbar extends Component {
  render() {
    return (
      
      <div>
      <h1 id='slimebase'>
        <Link to='/'>_sSlimeBbase </Link>
        <img id='logo' src='/images/snail-logo.png' />
      </h1>
      <h4>threatened and endangered snails around the world</h4>
      <nav className="navbar navbar-default">
        <ul className='list-unstyled nav nav-tabs'>
          <li className="active"><Link to='/'>snails</Link></li>
          <li><Link to='/habitats'>habitats</Link></li>
        </ul>
      </nav>

      </div>
    )
  }
}

/* CONTAINER */
 
// const mapState = ({ snails }) => ({ snails });

// const mapDispatch = { loadSnails }

// export default connect(mapState, null)(Root);
