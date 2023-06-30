
import './App.css';
import Home from './Home';
import Clicker from './Clicker';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cars from './Cars';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path ="/clicker">
              <Clicker />
            </Route>
            <Route>
              <Cars />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
