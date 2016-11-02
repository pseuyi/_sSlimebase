'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store'
import { loadSnails, loadHabitats, loadHabitat} from './reducers/actions';
import Root from './components/Root'
import Snails from './components/Snails'
import Habitats from './components/Habitats'

const onSnailsEnter = function () {
  const thunk = loadSnails();
  store.dispatch(thunk);
};
const onHabitatsEnter = function () {
  const thunk = loadHabitats();
  store.dispatch(thunk);
};
const onHabitatEnter = function () {
  const thunk = loadHabitat();
  store.dispatch(thunk);
};

render (
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path="/" component={Root}>
    		<IndexRoute component={Snails} onEnter={onSnailsEnter}/>
    		<Route path='/snails' component={Snails} onEnter={onSnailsEnter}/>
    		<Route path='/habitats' component={Habitats} onEnter={onHabitatsEnter}/>
        
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)

// <Route path='/habitats/:id' component={SingleHabitat} />