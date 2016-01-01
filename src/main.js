import React from 'react';
import render from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { Proto, NoMatch, List, Single, Layout } from './components';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Proto} />>
      <Route path="code" component={List}>
        <Route path="/code/:codeId" component={Single}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('main'));
