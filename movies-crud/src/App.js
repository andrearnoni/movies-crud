import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/movie/new" component={ NewMovie } />
        <Route exact path="/movie/:id" component={ MovieDetails } />
        <Route exact path="/movie/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
