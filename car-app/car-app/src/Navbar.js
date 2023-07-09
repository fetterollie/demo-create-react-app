import { Button, List, Typography } from "@material-ui/core";
import { Container } from "@mui/material";
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
                <Button variant="contained" href="/">Home</Button>
                <Button variant="contained" href='/clicker'> Clicker </Button>
                <Button variant="contained" href='/cars'> Cars </Button>
                <Button variant="contained" href='/characters'> Characters </Button>
                <Button variant="contained" href='/weather'>Weather</Button>
                <Button variant="contained" href='/vehicleinput'>Vehicle Input</Button>
                <Button variant="contained" href='/vehicledisplay'>Display Vehicles</Button>
        </Container>


    );
}
 
export default Navbar;