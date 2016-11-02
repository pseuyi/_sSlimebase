import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHabitat, loadHabitats } from '../reducers/actions';


class Habitats extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const habitatData = {
      name: event.target.name.value,
      geo: event.target.geo.value
    }
    this.props.addHabitat(habitatData)
    event.target.name.value = ""
    event.target.geo.value = ""
  }

  render() {
    
    return ( 

      <div className='row'>
        <form onSubmit={this.onSubmit}>
          <ul className='list-unstyled col-md-2'>
            <li>
              <input
                name="name"
                type="text"
                placeholder="name"
              />
            </li>
            <li>
              <input
                name="geo"
                type="text"
                placeholder="geo"
              />
            </li>

          </ul>
          <button type="submit" className='col-md-1'>add</button>
        </form>

        <ul className='list-unstyled'>
        {this.props.habitats && this.props.habitats.map((habitat)=>(
          <li key={habitat.id} className="col-md-4 habitat">
            <p><Link to={`habitats/${habitat.id}`}>{habitat.name}</Link></p>
            <p>{habitat.geo}</p>
          </li>
          ))}
        </ul>

      </div>
    )
  }
}

/* CONTAINER */
 
const mapState = ({ habitats }) => ({ habitats });
const mapDispatch = { addHabitat, loadHabitats }

export default connect(mapState, mapDispatch)(Habitats);