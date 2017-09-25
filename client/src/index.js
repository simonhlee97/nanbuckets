import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// components
import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import ListItem from './components/list/new-list-item';
import ListsShow from './components/list/list-items';
import ListShow from './components/list/list-show';
import RequireAuth from './components/auth/require_auth';
// reducers
import reducers from './reducers';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
  			<Route path="/" component={App}>
    			<Route path="signin" component={Signin} />
   				<Route path="signout" component={Signout} />
    			<Route path="signup" component={Signup} />
          <Route path="newitem" component={ListItem} />
          <Route path="items" component={ListsShow} />
          <Route path="items/:id" component={ListShow} />
    			{/* <Route path="feature" component={RequireAuth(Feature)} /> */}
        </Route>
  	</Router>
  </Provider>
  , document.querySelector('.container'));