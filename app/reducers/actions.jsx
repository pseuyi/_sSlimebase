import axios from 'axios';

const ADD_SNAIL = 'ADD_SNAIL';
const LOAD_SNAILS = 'LOAD_SNAILS';
const ADD_HABITAT = 'ADD_HABITAT';
const LOAD_HABITATS = 'LOAD_HABITATS';

export const add = snail => ({
	type: ADD_SNAIL,
	snail
})
export const load = snails => ({
	type: LOAD_SNAILS,
	snails
})

export const addHabitatAction = habitat => ({
	type: ADD_HABITAT,
	habitat
})
export const loadHabitatsAction = habitats => ({
	type: LOAD_HABITATS,
	habitats
})

export const addSnail = snailData => dispatch => {
		console.log('about to fetch/post the snailData', snailData)
    axios.post('/api/snails', snailData)
     .then(res => {
     	console.log('the fetch res ', res)
     		dispatch(add(res.data))
     })
     .catch(err => console.error(`add unsuccesful`, err))
}

export const loadSnails = () => dispatch => {
	  console.log('fetching init snails')
    axios.get('/api/snails')
     .then(res => (dispatch(load(res.data))))
     .catch(err => console.error(`LOAD unsuccesful`, err))
}

export const addHabitat = habitatData => dispatch => {
    axios.post('/api/habitats', habitatData)
     .then(res => {
     	console.log('the fetch res ', res)
     		dispatch(addHabitatAction(res.data))
     })
     .catch(err => console.error(`add unsuccesful`, err))
}

export const loadHabitats = () => dispatch => {
    axios.get('/api/habitats')
     .then(res => (dispatch(loadHabitatsAction(res.data))))
     .catch(err => console.error(`LOAD unsuccesful`, err))
}