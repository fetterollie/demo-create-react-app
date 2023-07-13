
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react'
import Weather from './components/Weather';
import Typography from '@mui/material/Typography';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { Button, Container } from '@mui/material';
import { createContext } from 'react';
import VehicleInput from './VehicleInput';
import VehicleDisplay from './VehicleDisplay';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/noto-sans"
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';
import Login from './components/Login';
import useToken from './useToken';



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
  const { token, setToken } = useToken();

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
  // console.log(cars);
  
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

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {!token ? 
            <Login setToken={setToken}/> :
              <Router>
                <ResponsiveAppBar />
                  <div className="container">
                    <div className='content'>
                      <Switch>
                        <Route path ="/home" component={Home} />
                        <Route exact path ="/" component={Home} />
                        <Route path='/vehicleinput'>
                          <VehicleInput />
                        </Route>
                        <Route path='/vehicledisplay'>
                          <VehicleDisplay cars={cars} token={token}/>
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
            }
          <Button onClick={() => {toggleTheme()}}>
            <SettingsBrightnessRoundedIcon/>
          </Button>

      </ThemeProvider>
  );
}

export default App;
