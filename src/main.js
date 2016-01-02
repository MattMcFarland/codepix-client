import React from 'react';
import {render} from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Home, Proto, NoMatch, List, Single, Layout } from './components';


render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="make" component={Proto}/>
      <Route path="list" component={List}/>
      <Route path="/code/:id" component={Single}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('main'));
