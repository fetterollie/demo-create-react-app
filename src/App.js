
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
import Register from './components/Register';
import Checkout from './Checkout';

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
    spacing: 1,
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
    spacing: 1,
  }
);


function App() {
  const { token, setToken } = useToken();

  const [cars, setCars] = useState([])

  let [shoppingCart, setShoppingCart] = useState([])

  // function addToShoppingCart(car) {
    
  // }

  const addToShoppingCart = (car) => {
    if (car !== undefined && !shoppingCart.includes(car)) {
      shoppingCart.push(car)
    }
    
    console.log("cart(add):", shoppingCart)

  }

  const removeFromShoppingCart = (car) => {
    let tempArray = []
    if (shoppingCart.includes(car)) {
      tempArray = shoppingCart.filter((cars) => cars !== car) 
      setShoppingCart(tempArray)
    }
    
    console.log("cart(del):", shoppingCart)
    
  }

  useEffect(() => {
    addToShoppingCart()
  }, [shoppingCart])
  
  // Toggle Theme
  const [theme, setTheme] = useState(lightTheme)
  const [isDark, setisDark] = useState(false)

  const toggleTheme = () => {
    setTheme(() => (isDark === true ? lightTheme : darkTheme))
    setisDark(() => (!isDark))
  }

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {!token ? 
            <Login setToken={setToken}/>
            :
              <Router>
                <ResponsiveAppBar token={token}/>
                  <div className="container">
                    <div key="fix?" className='content'>
                      <Switch>
                        <Route path ="/home" component={Home} />
                        <Route exact path ="/" component={Home} />
                        <Route path='/vehicleinput'>
                          <VehicleInput />
                        </Route>
                        <Route path='/vehicledisplay'>
                          <VehicleDisplay token={token} addToShoppingCart={addToShoppingCart} removeFromShoppingCart={removeFromShoppingCart} />
                        </Route>
                        <Route path="/checkout">
                          <Checkout shoppingCart={shoppingCart} removeFromShoppingCart={removeFromShoppingCart} token={token}/>
                        </Route>
                        {token === "manager" ? <Route path="/register">
                          <Register />
                        </Route> : <></>}
                      </Switch>
                    </div>
                    <Button className="" onClick={() => {toggleTheme()}}>
                      <SettingsBrightnessRoundedIcon/>
                    </Button>
                  </div>
              </Router>
            }
          

      </ThemeProvider>
  );
}

export default App;
