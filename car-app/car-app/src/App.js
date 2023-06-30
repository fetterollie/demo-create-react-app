
import './App.css';
import Home from './Home';
import Clicker from './Clicker';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cars from './Cars';
import Characters from './Characters';
import character from './Character';
import { useState } from 'react'


function App() {

  const [characters, setCharacters] = useState([
    {
        id: 1,
        name: 'mario',
        speech: 'mama mia',
        color: 'red'
    },
    {
        id: 2,
        name: 'luigi',
        speech: 'uiiiiiigiii',
        color: 'green'
    },
    {
        id: 3,
        name: 'princess peach',
        speech: 'save the mushroom kingdom',
        color: 'pink'
    },
    {
        id: 4,
        name: 'bowser',
        speech: 'destroy the mushroom kingdom',
        color: 'green'
    },
    {
        id: 5,
        name: 'toad',
        speech: 'ill cook you whatever you like',
        color: 'red'
    },
])

  // Delete Character
  const deleteCharacter = (id) => {
    console.log('delete', id)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/clicker">
              <Clicker />
            </Route>
            <Route path="/cars">
              <Cars />
            </Route>
            <Route path='/characters'>
              <Characters characters={characters} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
