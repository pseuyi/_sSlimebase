import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSnail, loadSnails } from '../reducers/actions';
import AddForm from './AddForm'

class Snail extends Component {
  render() {
    return ( 

      <div>
      </div>
    )
  }
}

/* CONTAINER */
 
// const mapState = ({ snails }) => ({ snails });
// const mapDispatch = { loadSnails }

// export default connect(mapState, mapDispatch)(Snails);