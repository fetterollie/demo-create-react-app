import { Button, List, Typography } from "@material-ui/core";
import { Container } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';

const Navbar = ({ toggleTheme }) => {
    return (
        <Container>
            <Typography 
                variant="h4"
                color="primary"
                align="center"
                >
                Create-React-App
                <br />
                <Button 
                    size="small"
                    variant="contained"
                    onClick={() => {toggleTheme()}}
                    color="secondary"
                >
                    <SettingsBrightnessRoundedIcon/>
                </Button>
            </Typography>
            <List>
                <Link to='/'> Home </Link>
                <Link to='/clicker'> Clicker </Link>
                <Link to='/cars'> Cars </Link>
                <Link to='/characters'> Characters </Link>
                <Link to='/weather'>Weather</Link>
                <Link to='/vehicleinput'>Vehicle Input</Link>
                <Link to='/vehicledisplay'>Display Vehicles</Link>
            </List>
        </Container>


    );
}
 
export default Navbar;