import { Button } from "@mui/material";
import { useState } from "react";
import { createTheme } from '@mui/material/styles';

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

const ToggleTheme = () => {

const [theme, setTheme] = useState(lightTheme)

const [isDark, setisDark] = useState(false)

// Toggle Theme attempt #2
const onToggleTheme = () => {
    setTheme(() => (isDark === true ? lightTheme : darkTheme))
    setisDark(() => (!isDark))
    console.log(isDark)
    console.log(theme.palette.mode)
  }

    return (
        <Button onClick={() => {onToggleTheme()}}>
            Toggle Theme
        </Button>
    );
}
 
export default ToggleTheme;