import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSnail, loadSnails } from '../reducers/actions';
import AddForm from './AddForm'

class Snails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('snail props? ', this.props)
    return ( 

      <div>
      <AddForm />

        <div className='row'>
        {this.props.snails && this.props.snails.map((snail)=>(
          <div key={snail.id} className="col-md-4 snail">
            <img src={`${snail.image}`} alt='default snail' />
            <p>{snail.name}</p>
            <p><i>{snail.species}</i></p>
            <p>{snail.status}</p>
          </div>
          ))}
        </div>

      </div>
    )
  }
}

/* CONTAINER */
 
const mapState = ({ snails }) => ({ snails });
const mapDispatch = { loadSnails }

export default connect(mapState, mapDispatch)(Snails);