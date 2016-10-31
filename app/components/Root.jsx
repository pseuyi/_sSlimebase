import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar'
import { loadSnails } from '../reducers/actions';

class Root extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='main' className="container-fluid">
      <Navbar />  
        { this.props.children }
      </div>
    )
  }
}

/* CONTAINER */
 
const mapState = ({ snails }) => ({ snails });

const mapDispatch = { loadSnails }

export default connect(mapState, mapDispatch)(Root);
