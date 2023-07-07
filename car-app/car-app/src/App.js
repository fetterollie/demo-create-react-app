
import Home from './Home';
import Clicker from './Clicker';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cars from './Cars';
import Characters from './Characters';
import character from './Character';
import { useState } from 'react'
import Weather from './Weather';
import axios from 'axios'
import Typography from '@mui/material/Typography';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { Container } from '@mui/material';
import { makeStyles, Paper, Box } from '@material-ui/core';
import Layout from './Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext } from 'react';
import { light } from '@mui/material/styles/createPalette';
import InputCar from './components/InputCar';
import Vehicles from './Vehicles';

export const ThemeContext = createContext(null);


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#488dd3',
      contrastText: '#badcff',
    },
    secondary: {
      main: '#e6aa38',
    },
    warning: {
      main: '#ffd600',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
});

const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#4d9ae5',
        dark: '#0a2c52',
        light: '#cbe5ff',
      },
      secondary: {
        main: '#e6aa38',
      },
      text: {
        primary: '#0a2c52',
        secondary: '#488dd3',
      },
    },
    typography: {
      fontFamily: 'Lato',
    },
  });


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

  // Add Character
  const addCharacter = (charInfo) => {
    console.log(charInfo)
    const id = Math.floor(Math.random() * 10000) + 1
    const newCharacter = {id, ...charInfo}
    setCharacters([...characters, newCharacter])
  }

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

  const [theme, setTheme] = useState(lightTheme)

  const [isDark, setisDark] = useState(false)

  // Toggle Theme attempt #2
  const toggleTheme = () => {
    setTheme(() => (isDark === true ? lightTheme : darkTheme))
    setisDark(() => (!isDark))
    console.log(isDark)
    console.log(theme.palette.mode)
  }
  

  // // Toggle Theme
  // const toggleTheme = () => {
  //   setTheme(
  //     (curr) => (curr.palette.mode === "light" ? darkTheme : lightTheme) 
  //   );
  //   console.log(theme.palette.mode)
  // }
  


  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Router>
            <Layout theme={theme} toggleTheme={toggleTheme}>
              <div className="container">
                <div className='content'>
                  <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route path="/clicker">
                      <Clicker />
                    </Route>
                    <Route path="/cars">
                      <Cars />
                    </Route>
                    <Route path='/characters'>
                      <Typography variant="h5">
                        {'Total characters: ' + characters.length}
                      </Typography>
                      <Container>{characters.length > 0 ? (<Characters characters={characters} onDelete={deleteCharacter} onToggle={toggleFavorite} onAdd={addCharacter} />) : ('There are no Characters to display...')}</Container>
                    </Route>
                    <Route path='/weather'>
                      <Weather />
                    </Route>
                    <Route>
                      <Vehicles />
                    </Route>
                  </Switch>
                </div>
                <Typography variant='h1'>
                  <Container align='center'>
                    <ChildCareIcon color="primary" />  
                  </Container>
                </Typography>
              </div>
            </Layout>
          </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
