// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.jsx';
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
