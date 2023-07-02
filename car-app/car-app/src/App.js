
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
        color: 'red',
        favorite: true,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wcyOm15NsGZcrwm_O1AY1rRSgh4UI-Pr1kG4We7_xurHWmI&s'
    },
    {
        id: 2,
        name: 'luigi',
        speech: 'uiiiiiigiii',
        color: 'green',
        favorite: false,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO7uo93bceM5Ku0op1LU6rGIQCcFwBTH28xBH2THD_Yybmw&s'
    },
    {
        id: 3,
        name: 'princess peach',
        speech: 'save the mushroom kingdom',
        color: 'pink',
        favorite: false,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAQCZmkco4zRDnCQPVbACWDira7NhAH1_DMGBz2lR8jKsXQc&s'
    },
    {
        id: 4,
        name: 'bowser',
        speech: 'destroy the mushroom kingdom',
        color: 'green',
        favorite: false,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_BzHKZL0vvm5GPh_kvv-WtZ10FdvGp-X4sk9dV1tFlWWVnM&s'
    },
    {
        id: 5,
        name: 'toad',
        speech: 'ill cook you whatever you like',
        color: 'red',
        favorite: false,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvaiOvPKtSfloiPXBGhLnYvz4e1M5CLDtF9Q6EPHnpKqKH8J6&s'
    },
])

  // Delete Character
  const deleteCharacter = (id) => {
    // console.log('delete', id)
    setCharacters(characters.filter((character) => character.id !== id))
  }

  // Toggle Favorite
  const toggleFavorite = (id) => {
    console.log('toggle', id)
    setCharacters(
      characters.map(
          (character) => character.id === id ? {...character, favorite: !character.favorite} : character
        )
      )
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
              <h3>
                {'Total characters: ' + characters.length}
              </h3>
              <p>{characters.length > 0 ? (<Characters characters={characters} onDelete={deleteCharacter} onToggle={toggleFavorite} />) : ('There are no Characters to display...')}</p>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
