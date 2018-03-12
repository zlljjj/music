import React, { Component } from 'react';
import Header from './components/Header/header'
import './App.css';
import { Route , HashRouter , Switch } from 'react-router-dom';
import After from './pages/After/after';
import Deep from './pages/Deep/deep';
import Minimal from './pages/Minimal/minimal';
import Tech from './pages/Tech/tech';
import Techno from './pages/Techno/techno';

// import './reset.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header></Header>
          <div className="App-content">
              <div>
                <Switch>
                  <Route path="/tech" component={Tech} />
                  <Route path="/minimal" component={Minimal} />
                  <Route path="/deep" component={Deep} />
                  <Route path="/techno" component={Techno} />
                  <Route path="/after" component={After} />
                </Switch>
              </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
