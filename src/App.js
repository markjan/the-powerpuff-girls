import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Episode from './routes/Episode';
import Show from './routes/Show';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>An Interview Exercise.</h1>
          </header>
          <Switch>
            <Route exact path="/"><Show /></Route>
            <Route exact path="/episode/:name-:id" name="Episode Detail Page"><Episode /></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
