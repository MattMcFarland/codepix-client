import React from 'react';
import {render} from 'react-dom';
import { IndexRoute, Route } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Home, Proto, NoMatch, List, Single, Layout } from './components';
import { RelayRouter } from 'react-router-relay';
import Relay from 'react-relay';
import { browserHistory } from 'react-router';

console.log(browserHistory);

const CardQueries = {
  cards: () => Relay.QL`query { store }`
};


render((
  <RelayRouter history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="make" component={Proto}/>
      <Route
        path="list" component={List}
        queries={CardQueries}/>
      <Route path="/code/:id" component={Single}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </RelayRouter>
), document.getElementById('main'));
