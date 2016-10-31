import { combineReducers } from 'redux'

// const ADD_SNAIL = 'ADD_SNAIL';
// const ADD_HABITAT = 'ADD_HABITAT';
// const LOAD_SNAILS = 'LOAD_SNAILS';
// const LOAD_HABITATS = 'LOAD_HABITATS';

const ADD_TO_HABITAT = 'ADD_TO_HABITAT';
const EDIT_SNAIL = 'EDIT_SNAIL';
const EDIT_HABITAT = 'EDIT_HABITAT';
const DELETE_SNAIL = 'DELETE_SNAIL';
const DELETE_HABITAT = 'DELETE_HABITAT';


const initialState = {
	snails: [],
	habitats: []
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
  	case 'LOAD_SNAILS':
  		return { snails: action.snails }
    case 'LOAD_HABITATS':
    	return { habitats: action.habitats }
  	case 'ADD_SNAIL':
  		return Object.assign({}, state, {snails: state.snails.concat(action.snail)})
    case 'ADD_HABITAT':
  		return Object.assign({}, state, {habitats: state.habitats.concat(action.habitat)})
  	case 'ADD_TO_HABITAT':
  		return state
    default: return state
  }
};

export default rootReducer
