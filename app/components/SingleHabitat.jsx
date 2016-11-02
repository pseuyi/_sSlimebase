import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addHabitat, loadHabitats } from '../reducers/actions';


class Habitat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return ( 

      <div className='row'>


        <ul className='list-unstyled'>
          <li key={habitat.id} className="col-md-4 habitat">
            <p>{habitat.name}</p>
            <p>{habitat.geo}</p>
          </li>
          
        </ul>

      </div>
    )
  }
}

/* CONTAINER */
 
const mapState = ({ habitats }) => ({ habitats });
const mapDispatch = { addHabitat, loadHabitats }

export default connect(mapState, mapDispatch)(Habitats);