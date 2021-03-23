import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import ScrollToTop from './components/ScrollToTop';
import Hawaii from './pages/Hawaii';
import Home from './pages/Home';
import Jamaica from './pages/Jamaica';
import Kids from './pages/Kids';
import Snorkelling from './pages/Snorkelling';
import Trips from './pages/Trips';
import WaterAerobics from './pages/WaterAerobics';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
            <Route path='/trips/hawaii'>
              <Hawaii />
            </Route>
            <Route path='/trips/jamaica'>
              <Jamaica />
            </Route>
            <Route path='/water-aerobics'>
              <WaterAerobics />
            </Route>
            <Route path='/kids'>
              <Kids />
            </Route>
            <Route path='/snorkelling'>
              <Snorkelling />
            </Route>
            <Route path='/trips'>
              <Trips />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
