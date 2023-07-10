
import Home from './Home';
import Clicker from './Clicker';
// import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cars from './Cars';
import Characters from './Characters';
// import character from './Character';
import { useEffect, useState } from 'react'
import Weather from './Weather';
// import axios from 'axios'
import Typography from '@mui/material/Typography';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { Button, Container } from '@mui/material';
// import { makeStyles, Paper, Box } from '@material-ui/core';
import { createContext } from 'react';
// import { light } from '@mui/material/styles/createPalette';
// import InputCar from './components/InputCar';
// import Vehicles from './VehicleInput';
import VehicleInput from './VehicleInput';
import VehicleDisplay from './VehicleDisplay';
import Navbar from './Navbar';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/noto-sans"
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';



export const ThemeContext = createContext(null);


const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#546e7a',
    },
    secondary: {
        main: '#547a73',
      },
    },
    typography: {
      fontFamily: "Noto Sans",
    },
    props: {
      MuiAppBar: {
        color: 'secondary',
      },
    },
    spacing: 4,
  }
);

const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#546e7a',
    },
    secondary: {
      main: '#547a73',
      },
    },
    typography: {
      fontFamily: 'Noto Sans',
    },
    props: {
      MuiAppBar: {
        color: 'secondary',
      },
    },
    spacing: 4,
  }
);


function App() {

  const [cars, setCars] = useState([])

  const getCars = async () => {
    try{

        const response = await fetch("http://localhost:5000/cars");
        const jsonData = await response.json();

        setCars(jsonData);
    } catch (err) {
        console.error(err.message);
    }
  };

  useEffect(() => {
      getCars();
  }, []);

  //output
  console.log(cars);

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
  
  // Toggle Theme
  const [theme, setTheme] = useState(lightTheme)
  const [isDark, setisDark] = useState(false)

  const toggleTheme = () => {
    setTheme(() => (isDark === true ? lightTheme : darkTheme))
    setisDark(() => (!isDark))
    // checking toggle
    // console.log(isDark)
    // console.log(theme.palette.mode)
  }
  
  


  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Router>
            <ResponsiveAppBar />
              <div className="container">
                <div className='content'>
                  <Switch>
                    <Route exact path ="/home">
                      <Home cars={cars}/>
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
                    <Route path='/vehicleinput'>
                      <VehicleInput />
                    </Route>
                    <Route path='/vehicledisplay'>
                      <VehicleDisplay cars={cars}/>
                    </Route>
                  </Switch>
                </div>
                <Typography variant='h1'>
                  <Container align='center'>
                    <ChildCareIcon color="primary" />  
                  </Container>
                </Typography>
              </div>

          </Router>
        <Button onClick={() => {toggleTheme()}}>
        <SettingsBrightnessRoundedIcon/>
        </Button>
      </ThemeProvider>
  );
}

export default App;
