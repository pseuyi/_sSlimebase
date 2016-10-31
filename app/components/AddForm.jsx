import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSnail } from '../reducers/actions';

class AddForm extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const snailData = {
      name: event.target.name.value,
      species: event.target.species.value,
      status: event.target.status.value,
      image: event.target.image.value,
    }
    this.props.addSnail(snailData)
    event.target.name.value = ""
    event.target.species.value = ""
    event.target.status.value = ""
    event.target.image.value = ""
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
                  name="species"
                  type="text"
                  placeholder="species"
                />
              </li>
              <li>
                <input
                  name="status"
                  type="text"
                  placeholder="status"
                />
              </li>
              <li>
                <input
                  name="image"
                  type="text"
                  placeholder="image url"
                />
              </li>
            </ul>
            <button type="submit" className='col-md-1'>add</button>
          </form>
          <div className='col-md-3'></div>
      </div>
    )
  }
}

/* CONTAINER */
 
// const mapState = ({ snails }) => ({ snails });

const mapDispatch = { addSnail }

export default connect(null, mapDispatch)(AddForm);