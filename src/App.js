import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Knowlegdes from './pages/Knowlegdes';

import Passion from './pages/Hobbies';
import NotFound from './pages/NotFound';
import Speak from './pages/Speak';
import Contact from './pages/Contact';
import Projets from './pages/Projets'
import Diplomes from './pages/Diplome';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Speak" component={Speak} />
            <Route path="/Passion" component={Passion} />
            <Route path="/Diplome" component={Diplomes} />
            <Route path="/Knowlegdes" component={Knowlegdes} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Projets" component={Projets} />
            <Route  component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;