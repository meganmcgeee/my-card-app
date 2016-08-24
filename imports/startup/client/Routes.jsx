import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';

import { App } from '../../ui/components/App.jsx';
import { Login } from '../../ui/components/Login.jsx';
import { Recipient } from '../../ui/components/Recipient.jsx';
import { Sent } from '../../ui/components/Sent.jsx';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/signup" component={Login} />
        <Route path="/send" component={Recipient} />
        <Route path="/sent" component={Sent} />
      </Route>
    </Router>,
    document.getElementById('render-target')
  );
});
