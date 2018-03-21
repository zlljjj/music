import React, { Component } from 'react';
import Header from './components/Header/header'
import Audio from './components/Audio/audio'
import './App.css';
import { Route , HashRouter , Switch , Redirect } from 'react-router-dom';
// import After from './pages/After/after';
// import Deep from './pages/Deep/deep';
// import Minimal from './pages/Minimal/minimal';
// import Tech from './pages/Tech/tech';
// import Techno from './pages/Techno/techno';
import 'antd/dist/antd.css'; 
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
import asyncComponent from './load';

const After = asyncComponent(() => import("./pages/After/after"));
const Deep = asyncComponent(() => import("./pages/Deep/deep"));
const Minimal = asyncComponent(() => import("./pages/Minimal/minimal"));
const Tech = asyncComponent(() => import("./pages/Tech/tech"));
const Techno = asyncComponent(() => import("./pages/Techno/techno"));


// import './reset.css';
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header></Header>
            <div className="App-content">
                <Switch>
                  <Route path="/tech" component={Tech} />
                  <Route path="/minimal" component={Minimal} />
                  <Route path="/deep" component={Deep} />
                  <Route path="/techno" component={Techno} />
                  <Route path="/after" component={After} />
                  <Redirect from='/' to='/tech'/>
                </Switch>
            </div>
            <Audio></Audio>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
