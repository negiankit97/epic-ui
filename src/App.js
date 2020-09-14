import React from 'react';
import './styles/main.scss';
import EpicMain from './components/EpicMain';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Faq from './components/Faq';
import News from './components/News';
import Unreal from './components/Unreal';
import Help from './components/Help';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Redirect from="/" to="/store" ></Redirect>} />
          <Route path='/store' render={(props) => <EpicMain {...props} />} />
          <Route path='/faq' render={(props) => <Faq {...props} />} />
          <Route path='/news' render={(props) => <News {...props} />} />
          <Route path='/help' render={(props) => <Help {...props} />} />
          <Route path='/unreal' render={(props) => <Unreal {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
