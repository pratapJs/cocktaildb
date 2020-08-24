import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import pages
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';
import Home from './pages/Home';

import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/cocktail/:id'>
          <SingleCocktail />
        </Route>

        <Route path='*'>
          <Error />{' '}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
